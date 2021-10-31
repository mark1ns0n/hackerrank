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