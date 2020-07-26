`use strict`

function maximumHourGlassSum(arr) {
    let fullArray = [],
        sub0 = [],
        sub = [],
        startH = 0,
        endH = 3,
        startV = 0,
        endV = 3;
    let array2Dlength = Math.pow((arr.length - 2), 2);
    for (let i = startV; i < endV; i++) {
        for (let j = startH; j < endH; j++) {
            sub0.push(arr[i][j]);
        }
        sub.push(sub0);
        sub0 = [];
        if (fullArray.length === array2Dlength) {
            break;
        }
        if (i === endV - 1) {
            fullArray.push(sub.join(','));
            sub = [];
            startH++;
            endH++;
            i = startV - 1;
        }
        if (endH === arr.length + 1) {
            startH = 0;
            endH = 3;
            startV++;
            endV++;
            i = startV - 1;
        }
    }
    let sumArray = fullArray.map(subString => {
        return subString.split(',').reduce((acc, val, idx) => {
            if (idx !== 3 && idx !== 5) acc += Number(val);
            return acc;
        }, 0)
    })
    return Math.max(...sumArray)
}
let arrayOfMinusNumbers = [
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 9, 2, -4, -4],
    [0, 0, 0, -2, 0]
];
let arrayOfPositiveNumbers = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];
console.log(maximumHourGlassSum(arrayOfMinusNumbers));
console.log(maximumHourGlassSum(arrayOfPositiveNumbers));