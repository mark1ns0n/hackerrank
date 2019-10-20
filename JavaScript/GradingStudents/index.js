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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    const result = [];
    for (let i of grades) {
        if (i < 38) {
            result.push(i);
        } else {
            const max = i / 5;
            const int = Math.floor(max);
            if (int === max) {
                result.push(i);
            } else {
                let l = (int + 1) * 5;
                if (Math.abs(l - i) >= 3) {
                    result.push(i);
                } else {
                    result.push((int + 1) * 5);
                }
            }
        }
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

