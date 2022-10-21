function compareTriplets(a, b) {
    let alise = 0;
    let bob = 0;
    for (let i in a) {
        if (a[i] > b[i]) {
            alise++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }
    return [alise, bob];
}