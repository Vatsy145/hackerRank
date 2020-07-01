'use strict';

function simpleArraySum(ar) {
    return ar.reduce((acc, val) => acc + val, 0);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))
document.write(simpleArraySum([1, 2, 3, 4, 10, 11]))