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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  // Write your code here

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let rotAlph = Array(26);
  let rotation = k > 26 ? k % 26 : k;

  let accRotation = rotation;

  for (let i = 0; i < 26; i++) {
    if (accRotation < 26) {
      rotAlph[i] = alphabet[accRotation]
      accRotation += 1
    }
  }

  let j = 0;
  for (let i = 26 - rotation, j = 0; i < 26; i++, j++) {
    rotAlph[i] = alphabet[j];
  }

  const dividedByLetters = String(s).split('');

  const caesarCipher = dividedByLetters.map(letter => {
    const letterIndex = alphabet.findIndex(a => a === letter.toLowerCase());

    if (letterIndex === -1) {
      return letter
    }

    if (letter !== alphabet[letterIndex]) {
      return String(rotAlph[letterIndex]).toUpperCase();
    }

    return rotAlph[letterIndex];
  });

  return caesarCipher.join('');
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine();

  const k = parseInt(readLine().trim(), 10);

  const result = caesarCipher(s, k);

  ws.write(result + '\n');

  ws.end();
}
