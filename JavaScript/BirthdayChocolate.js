function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let sum = 0;
        let j = 0;
        while (j < m && s[j + i]) {
            sum += s[j + i];
            j++;
        }

        if (sum === d) {
            count++;
        }
    }

    return count;
}