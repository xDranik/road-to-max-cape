const {
  getHiscoresByName,
  printHiscores,
  saveHiscores
} = require("../helpers/hiscores");

module.exports = function lookupCommand(name, options) {
  return getHiscoresByName(name, options.mode).then(hiscores => {
    printHiscores(hiscores, options);

    if (options.save) {
      saveHiscores(hiscores);
    }
  });
};
