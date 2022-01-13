const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // eg. input[0] = 5, input[1] = 3 1 4 3 2
  // 여기서부터 시작!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let number = input[0]; //5
  let times = input[1].split(" ").map((e) => parseInt(e, 10)); 
  // [3, 1, 4, 3, 2]
let accumulatedSum = 0;
  let minSum = 0;
if (number === 1) {
    console.log(arr[0]);
  } else {
    times.sort((a, b) => a - b);
    for (let i in times) {
      minSum += accumulatedSum + times[i];
      accumulatedSum += times[i];
    }
};
console.log(minSum);
process.exit();
});