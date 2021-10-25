const { Transform } = require("stream");
const { transferToNumber } = require("./code");
const valid = require("./valid");

class CaesarTransform extends Transform {
  constructor(input, task) {
    super();
    this.input = input;
    this.task = task;
  }

  _transform(chunk, _, done) {
    // if (!valid.isNumber(chunk)) {
    //   process.stdout.write("Value must be a NUMBER | press CTRL + C to exit: ");
    //   done();
    // }

    let result = transferToNumber(chunk.toString("utf8"), this.task);
    this.push(result);
    done();
  }
}

module.exports = CaesarTransform;
