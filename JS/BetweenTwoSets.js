function getTotalX(a, b) {
    let result = 0;
    for (let i = 0; i <= b[0]; i+= 1) {
        let good = true;
        for (let j of a) {
            if (i % j !== 0) {
                good = false;
                break;
            }
        }
        if (!good) {
            continue;
        }
        for (let j of b) {
            if (j % i !== 0) {
                good = false;
                break;
            }
        }
        if (good) {
            result++;
        }
    }

    return result;
}