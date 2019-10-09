'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    const plus = [];
    const minus = [];
    const zero = [];
    const length = arr.length;
    for (let i of arr) {
        if (i > 0) {
            plus.push(i);
        } else if (i < 0) {
            minus.push(i);
        } else {
            zero.push(i);
        }
    }

    console.log(plus.length / length);
    console.log(minus.length / length);
    console.log(zero.length / length);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

