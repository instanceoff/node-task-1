const { Transform } = require("stream");
const { transferToNumber } = require("./code");

//const { caesarCipher } = require("./code");

class CaesarTransform extends Transform {
  constructor(input) {
    super();
    this.input = input;
  }

  _transform(chunk, _, done) {
    // let result = "";

    let result = transferToNumber(chunk.toString("utf8"));
    // switch (this.action) {
    //   case "encode":
    //     result = caesarCipher(chunk.toString("utf8"), this.shift);
    //     break;
    //   case "decode":
    //     result = caesarCipher(chunk.toString("utf8"), -this.shift);
    //     break;
    //   default:
    //     process.stderr.write(" Erorr: Action not found\n");
    //     process.exit(1);
    // }

    // result = "Proshlo";

    this.push(result);
    done();
  }
}

module.exports = CaesarTransform;
