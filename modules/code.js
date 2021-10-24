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

  //   let output = "";
  //   for (let i = 0; i < str.length; i++) {
  //     let c = str[i];
  //     if (c.match(/[a-z]/i)) {
  //       const code = str.charCodeAt(i);
  //       if (code >= 65 && code <= 90) {
  //         c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
  //       } else if (code >= 97 && code <= 122) {
  //         c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
  //       }
  //     }
  //     output += c;
  //   }

  return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
};
