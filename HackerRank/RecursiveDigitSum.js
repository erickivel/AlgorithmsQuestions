'use strict';

const fs = require('fs');

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
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    // Write your code here
    function supDigit(n, k) {
        const numberStr = String(n);
        const strArr = numberStr.split("");
        const numberArr = strArr.map(num => Number(num));
    
        const singleSum = numberArr.reduce((acc, number) => {
            acc += number;
            return acc;
        }, 0);
    
        const sum = singleSum * k;
    
        return sum;
    }
    let sum = supDigit(n, k);
    
    if (String(sum).length === 1) {
        return sum;
    }
    
    let len = 0;
    
    while(len !== 1) {
        sum = superDigit(sum, 1);
        
        if (String(sum).length !== 1) {
            len = 0;
        } else {   
            len = 1;
        }   
    }
    
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = firstMultipleInput[0];

    const k = parseInt(firstMultipleInput[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
