const { COLUMN_TO_WIDTH } = require("./consts");

function formatEntryByColumn(entry, column, padStart = true) {
  const width = COLUMN_TO_WIDTH[column];
  if (!width) {
    throw new Error(`Can't format using invalid column (${column})`);
  }

  entry = entry.toString();
  return padStart ? entry.padStart(width) : entry.padEnd(width);
}

function formatEntryDiff(prevValue, currentValue, ascending = true) {
  let diff = currentValue - prevValue;
  if (!ascending) {
    diff *= -1;
  }

  let result = currentValue;
  if (diff >= 0) {
    result += ` (+${diff})`;
  } else {
    result += ` (${diff})`;
  }

  return result;
}

function formatJSON(json) {
  return JSON.stringify(json, null, 2);
}

module.exports = {
  formatEntryByColumn,
  formatEntryDiff,
  formatJSON
};
