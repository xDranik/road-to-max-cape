const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const {
  SKILL_NAMES,
  Modes,
  MODE_TO_HISCORE_TYPE,
  Columns
} = require("../utils/consts");
const {
  formatEntryByColumn,
  formatEntryDiff,
  formatJSON
} = require("../utils/format");

function getHiscoresByName(name, mode = Modes.REGULAR) {
  const encodedName = encodeURIComponent(name);
  const hiscoreType = MODE_TO_HISCORE_TYPE[mode];

  if (!hiscoreType) {
    throw new Error(`Invalid game mode (${mode})`);
  }

  return fetch(
    `https://secure.runescape.com/m=${hiscoreType}/index_lite.ws?player=${encodedName}`
  )
    .then(res => res.text())
    .then(text => hiscoresCsvToJson(text, name));
}

function hiscoresCsvToJson(csv, name) {
  const skills = {};
  const rows = csv.split("\n");

  SKILL_NAMES.forEach((rowName, index) => {
    const [rank, level, xp] = rows[index].split(",");
    skills[rowName] = {
      rank: +rank,
      level: +level,
      xp: +xp
    };
  });

  return {
    skills,
    name,
    created: new Date().toISOString()
  };
}

function printHiscores(hiscores, { raw }) {
  if (raw) {
    console.log(formatJSON(hiscores));
    return;
  }

  const output = Object.keys(hiscores.skills)
    .map(skill => {
      let { rank, level, xp } = hiscores.skills[skill];
      skill = formatEntryByColumn(skill, Columns.SKILL, false);
      rank = formatEntryByColumn(rank, Columns.RANK);
      level = formatEntryByColumn(level, Columns.LEVEL);
      xp = formatEntryByColumn(xp, Columns.XP);

      return `${skill} ${rank} ${level} ${xp}`;
    })
    .join("\n");

  const skillColumnName = formatEntryByColumn("Skill", Columns.SKILL, false);
  const rankColumnName = formatEntryByColumn("Rank", Columns.RANK);
  const levelColumnName = formatEntryByColumn("Level", Columns.LEVEL);
  const xpColumnName = formatEntryByColumn("XP", Columns.XP);
  const heading = `${skillColumnName} ${rankColumnName} ${levelColumnName} ${xpColumnName}`;
  console.log(heading);
  console.log("-".repeat(heading.length));
  console.log(output);
}

function diffHiscores(currentHiscores, { compact }) {
  const previousHiscores = getLastSavedHiscores();
  const skillsDiff = {};

  Object.keys(currentHiscores.skills).forEach(skill => {
    let { rank, level, xp } = currentHiscores.skills[skill];
    let {
      rank: prevRank,
      level: prevLevel,
      xp: prevXp
    } = previousHiscores.skills[skill];

    if (compact && xp - prevXp === 0) {
      return;
    }

    skillsDiff[skill] = {
      rank: formatEntryDiff(prevRank, rank, false),
      level: formatEntryDiff(prevLevel, level),
      xp: formatEntryDiff(prevXp, xp)
    };
  });

  const nowDate = new Date(currentHiscores.created).toString();
  const previousDate = new Date(previousHiscores.created).toString();

  console.log(`Name: ${currentHiscores.name}`);
  console.log(`Lookup date: ${nowDate}`);
  console.log(`Previous lookup date: ${previousDate}\n`);
  printHiscores({ skills: skillsDiff }, { raw: false });
}

function getLastSavedHiscores() {
  const filePathLatest = path.join(__dirname, "../../data/latest.json");
  let lastSavedHiscores;

  try {
    lastSavedHiscores = JSON.parse(fs.readFileSync(filePathLatest, "utf8"));
  } catch (err) {
    console.log(`Diff failed with reason ${err.message}`);
    console.log("Try saving a lookup before diffing");
    process.exit(1);
  }

  return lastSavedHiscores;
}

function saveHiscores(hiscores) {
  const filePathWithDate = path.join(
    __dirname,
    "../../data",
    `${hiscores.created.slice(0, 10)}.json` // only use yyyy-mm-dd
  );
  const filePathLatest = path.join(__dirname, "../../data/latest.json");

  const output = formatJSON(hiscores);
  fs.writeFileSync(filePathWithDate, output);
  fs.writeFileSync(filePathLatest, output);
}

module.exports = {
  getHiscoresByName,
  printHiscores,
  diffHiscores,
  saveHiscores
};
