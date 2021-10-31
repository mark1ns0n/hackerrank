function sockMerchant(n, ar) {
    const map = new Map();
    let count = 0;
    for (let i of ar) {
        let value = map.get(i) || 0;
        value++;
        if (value) {
            if (value % 2 === 0) {
                count++;
            }
        }
        map.set(i, value);
    }

    return count;
}