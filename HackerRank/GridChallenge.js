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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Write your code here
    const rowLen = grid.length;
    const columnLen = grid[0].length;
    let gridSorted = [];
    
    
    
    for(let i = 0; i < rowLen; i++) {
        let letters = grid[i].split("");
        letters.sort();
        // Its a matrix
        gridSorted.push(letters)
    }
    
    let isInOrder = true;   
     
    for(let i = 0; i < columnLen; i++) {
        let column = []
        
        for(let j = 0; j < rowLen; j++) {
            column.push(gridSorted[j][i])
        }
        
        if (column.join("") !== column.sort().join("")) {
            isInOrder = false
        }
    }
    
    return isInOrder ? "YES" : "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
