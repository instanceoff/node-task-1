module.exports.transferToNumber = function transferToNumber(urr, task) {
  if (task == 2) {
    let firstArr = String(urr.trim().split(" ")[0]);

    let secArr = urr.trim().split(" ")[1];

    secArr = secArr.split("");
    for (let i = 0; i < secArr.length; i++) {
      firstArr = firstArr.split(secArr[i]).join("");
    }
    return firstArr;
  }

  if (task == 1) {
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
  }
};
