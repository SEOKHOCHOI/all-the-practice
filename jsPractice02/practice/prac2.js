// 파일을 읽어오기 위한 Node.js의 built-in file systemmodule fs 사용
let fs = require('fs');

// input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서
// Array로 저장됨.
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// input에서 지정한 value를 읽어와 다른 변수로 선언하고 활용
// toString메소드로 지금은 string이기 때문에, parseInt로 숫자로 형태변한.
let a = parseInt(input[0]);
let v = parseInt(input[1]);

console.log( a + b );


// 다른 방법으론
const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.split(' ').map(item => +item);

// 또는
const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const [a, b] = inputData;