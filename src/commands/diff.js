const {
  getHiscoresByName,
  diffHiscores,
  saveHiscores
} = require("../helpers/hiscores");

module.exports = function lookupCommand(name, options) {
  return getHiscoresByName(name, options.mode).then(hiscores => {
    diffHiscores(hiscores, options);

    if (options.save) {
      saveHiscores(hiscores);
    }
  });
};
