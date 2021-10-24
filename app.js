const fs = require("fs");
const stream = require("stream");
const util = require("util");
const pipeline = util.promisify(stream.pipeline);
const program = require("commander");

const valid = require("./modules/valid");
const CaesarTransform = require("./modules/transform");

const actions = async (_) => {
  const { input, output } = program.opts();

  valid.isEmpty(input) &&
    process.stdout.write(
      "Enter the text and press ENTER | press CTRL + C to exit: "
    );

  const ReadableStream = (await !valid.isEmpty(input))
    ? fs.createReadStream(input)
    : process.stdin;

  const WriteableStream = !valid.isEmpty(output)
    ? fs.createWriteStream(output)
    : process.stdout;

  try {
    await pipeline(ReadableStream, new CaesarTransform(input), WriteableStream);
  } catch (e) {
    process.stderr.write(` ${e.message}\n`);
    process.exit(1);
  }
};

process.stdin.setEncoding("utf8");
process.on("exit", (code) => console.log(chalk.yellow.bold("Code: ") + code));
process.on("SIGINT", (_) => {
  process.exit(0);
});

program
  .option("-i, --input <filename>", "An input file")
  .option("-o --output <filename>", "An output file")
  .action(actions);

program.parse(process.argv);
