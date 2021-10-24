module.exports.transferToNumber = function transferToNumber(urr) {
  arr = urr.trim().split(" ").join().split("");
  if (arr.length !== 10) {
    if (arr.length > 10) {
      for (let i = arr.length; i > 10; i--) {
        arr.pop();
      }
    }

    if (arr.length < 10) {
      for (let i = arr.length; i < 10; i++) {
        arr.push(0);
      }
    }
  }

  return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}\n`;
};
