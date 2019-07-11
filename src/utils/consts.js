const SKILL_NAMES = [
  "Overall",
  "Attack",
  "Defence",
  "Strength",
  "Hitpoints",
  "Ranged",
  "Prayer",
  "Magic",
  "Cooking",
  "Woodcutting",
  "Fletching",
  "Fishing",
  "Firemaking",
  "Crafting",
  "Smithing",
  "Mining",
  "Herblore",
  "Agility",
  "Thieving",
  "Slayer",
  "Farming",
  "Runecraft",
  "Hunter",
  "Construction"
];

const Modes = {
  REGULAR: "REGULAR",
  IRONMAN: "IRONMAN",
  HARDCORE_IRONMAN: "HARDCORE_IRONMAN",
  ULTIMATE_IRONMAN: "ULTIMATE_IRONMAN"
};

const MODE_TO_HISCORE_TYPE = {
  REGULAR: "hiscore_oldschool",
  IRONMAN: "hiscore_oldschool_ironman",
  HARDCORE_IRONMAN: "hiscore_oldschool_hardcore_ironman",
  ULTIMATE_IRONMAN: "hiscore_oldschool_ultimate"
};

const Columns = {
  SKILL: "SKILL",
  RANK: "RANK",
  LEVEL: "LEVEL",
  XP: "XP"
};

const COLUMN_TO_WIDTH = {
  SKILL: 15,
  RANK: 20,
  LEVEL: 10,
  XP: 30
};

module.exports = {
  SKILL_NAMES,
  Modes,
  MODE_TO_HISCORE_TYPE,
  Columns,
  COLUMN_TO_WIDTH
};
