'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  const amOrPm = s.slice(8, 10)

  const date = s.slice(0, 8);
  const dateSplit = date.split(":")

  const hours = dateSplit[0];
  const minutes = dateSplit[1];
  const seconds = dateSplit[2];

  if (hours !== "12") {
    if (amOrPm === "AM") {
      return `${hours}:${minutes}:${seconds}`
    }
    return `${Number(hours) + 12}:${minutes}:${seconds}`
  } else if (amOrPm === "PM") {
    return `${hours}:${minutes}:${seconds}`
  } else {
    return `00:${minutes}:${seconds}`
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
