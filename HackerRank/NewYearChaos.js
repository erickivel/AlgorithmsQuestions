'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  // Write your code here
  const len = q.length;
  
  let copy = q.map(e => e);
  
  const sorted = copy.sort((a, b) => a - b);
  
  let bribes = 0;
  
  let alreadyFindWrongNumber;
  
  while(q.join("") !== sorted.join("")) {
  // for (let j = 0; j <= len; j++) {
      alreadyFindWrongNumber = false;
      for (let i = (len - 1); i >= 0; i-- ) {    
          if (!alreadyFindWrongNumber) {
              if (q[i] > (i + 1)) {
                  alreadyFindWrongNumber = true;
                  let bribe = (q[i] - 1) - i;
                  if (bribe > 2) {
                      console.log("Too chaotic");
                      return;
                  }
              
                  let number = q[i];
                  let numberToSwap = q[q[i] - 1];
                  
                  q[q[i] - 1] = number;
                  q[i] = numberToSwap;
                  
                  
                  if (bribe > 1) {
                      number = q[i];
                      numberToSwap = q[i+1];
                      
                      q[i] = numberToSwap;
                      q[i+1] = number;
                  }
                  
                  bribes += bribe;
              }
          }
      }
  }
  console.log(bribes);
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
