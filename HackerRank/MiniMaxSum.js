'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => { return a - b });
  const minimumSum = sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3];
  const maximumSum = sortedArr[1] + sortedArr[2] + sortedArr[3] + sortedArr[4];
  console.log(minimumSum + ' ' + maximumSum)
}

function main() {

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
