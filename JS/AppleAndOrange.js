function countApplesAndOranges(houseStart, houseEnd, appleTreePos, orangeTreePos, apples, oranges) {
    [[apples, appleTreePos], [oranges, orangeTreePos]].forEach((items) => {
        const result = items[0].filter((itemRelPos) => {
            const itemAbsPos = items[1] + itemRelPos;
            return itemAbsPos >= houseStart && itemAbsPos <= houseEnd;
        });
        console.log(result.length);
    });
}