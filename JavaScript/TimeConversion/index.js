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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    const reg = /([0-9]{2}):([0-9]{2}:[0-9]{2})(AM|PM)/
    const result = s.match(reg);
    let hours = parseInt(result[1]);
    if (hours === 12) {
        hours = result[3] === 'AM' ? 0 : 12;
    } else {
        hours = result[3] === 'AM' ? hours : hours + 12;
    }
    return `${hours < 10 ? `0${hours}` : hours}:${result[2]}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
