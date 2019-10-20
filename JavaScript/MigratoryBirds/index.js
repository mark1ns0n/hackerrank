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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    const map = new Map();
    let max = 0;
    for (let i of arr) {
        const value = (map.get(i) || 0) + 1;
        map.set(i, value);
        if (value > max) {
            max = value;
        }
    }
    let min = null;
    const entiries = map.entries();
    while(1) {
        const item = entiries.next().value;
        if (!item) break;
        if (item[1] === max && (min === null || min > item[0])) {
            min = item[0];
        }
    }

    return min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}

