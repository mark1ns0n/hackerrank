'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    if (x1 === x2) {
        return 'YES';
    }
    if (x1 < x2 && v1 < v2 || x2 < x1 && v2 < v1) {
        return 'NO';
    }
    if (v1 % 2 === 0 && v2 % 2 === 0 && (x1 % 2 !== 0 && x2 % 2 === 0 || x1 % 2 === 0 && x2 % 2 !== 0)) {
        return 'NO';
    }

    let min = [];
    let max = [];
    if (x1 < x2) {
        min = [x1, v1];
        max = [x2, v2];
    } else {
        min = [x2, v2];
        max = [x1, v1];
    }

    while(1) {
        min[0] += min[1];
        max[0] += max[1];

        if (min[0] > max[0]) {
            return 'NO';
        }

        if (max[0] === min[0]) {
            return 'YES';
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}

