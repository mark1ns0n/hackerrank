function countingValleys(n, s) {
    let sum = 0;
    let count = 0;

    for (let i of s) {
        let value = i === 'D' ? -1 : 1;
        sum += value;
        if (value === 1 && sum === 0) {
            count++;
        }
    }

    return count;
}