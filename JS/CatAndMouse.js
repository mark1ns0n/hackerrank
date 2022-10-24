function catAndMouse(x, y, z) {
    const catA = Math.abs(x - z);
    const catB = Math.abs(y - z);
    let result = 'Mouse C';
    if (catA < catB) {
        result = 'Cat A';
    } else if (catB < catA) {
        result = 'Cat B';
    }

    return result;
}