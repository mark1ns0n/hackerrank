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

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    let february = 28;
    if (1918 === year) {
        february = 15;
    } else {
        const calendarType = year < 1919 ? 'julian' : 'gregorian';
        if ('julian' === calendarType && year % 4 === 0 || 'gregorian' === calendarType && (0 === year % 400 || 0 === year % 4 && 0 !== year % 100)) {
            february++;
        }
    }

    const umDaysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let month = 1;
    let days = 256;
    for (let i of umDaysInMonth) {
        if (days - i > 0) {
            days -= i;
            month++;
        } else {
            return `${days}.${month < 10 ? `0${month}` : month}.${year}`;
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}

