const commander = require("commander");

const lookupCommand = require("./commands/lookup");
const diffCommand = require("./commands/diff");

commander
  .command("lookup <name>")
  .description("Lookup hiscores by runescape name")
  .option(
    "-m, --mode <mode>",
    "Game mode: REGULAR (default) | IRONMAN | HARDCORE_IRONMAN | ULTIMATE_IRONMAN"
  )
  .option("-s, --save", "Save lookup")
  .option("-r, --raw", "Print raw output")
  .action(lookupCommand);

commander
  .command("diff <name>")
  .description("Diff current hiscores against last saved lookup")
  .option(
    "-m, --mode <mode>",
    "Game mode: REGULAR (default) | IRONMAN | HARDCORE_IRONMAN | ULTIMATE_IRONMAN"
  )
  .option("-s, --save", "Save lookup")
  .option("-c, --compact", "Compact diff. Only show skills that have progress")
  .action(diffCommand);

commander.parse(process.argv);
