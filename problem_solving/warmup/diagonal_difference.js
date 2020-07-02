`use strict`;

function diagonalDifference(arr) {
    let leftDiagonal = 0, rightDiagonal = 0, matrixLength = arr.length;
    for (let i = 0, j = matrixLength - 1; i < matrixLength; i++, j--) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][j];
    }
    return Math.abs(leftDiagonal - rightDiagonal)
}

let array1 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

let array2 = [
    [11, 2,   4,  3],
    [ 4, 5,   6, -1],
    [10, 8, -12,  4],
    [ 1, 5,  -1, -4]
]

console.log(diagonalDifference(array1))
console.log(diagonalDifference(array2))
