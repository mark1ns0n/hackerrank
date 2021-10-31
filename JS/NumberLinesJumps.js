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