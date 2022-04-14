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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  const totalNumbers = Number(arr.length);
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeros = 0;
  for (const number of arr) {
    if (number > 0) {
      positiveNumbers++;
    } else if (number < 0) {
      negativeNumbers++;
    } else {
      zeros++;
    }
  }

  const positiveRatio = Number(positiveNumbers / totalNumbers).toFixed(6)
  const negativeRatio = Number(negativeNumbers / totalNumbers).toFixed(6)
  const zeroRatio = Number(zeros / totalNumbers).toFixed(6)

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
