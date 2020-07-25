`use strict`

function toBinary(n) {
    let count = 0,
        inRow = 0,
        binaryArray = [];
    while (n) {
        let mod = n % 2;
        binaryArray.unshift(mod);
        n = Math.floor(n / 2);
    }
    binaryArray.forEach(val => {
        if (val === 1) {
            count++;
            inRow = count > inRow ? count : inRow;
        } else count = 0;
    })
    return inRow;
}


console.log(toBinary(262141))