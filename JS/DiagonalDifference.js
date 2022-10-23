function diagonalDifference(arr) {
    let lr = 0;
    let rl = 0;
    const length = arr[0].length - 1;
    for (let i in arr) {
        console.log(arr[i][i]);
        lr+=arr[i][i];
        rl+=arr[i][length - i];
    }
    return Math.abs(rl - lr);
}