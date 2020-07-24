`use strict`

function reverseOrder(arr) {
    let reversedArray = arr.reduce((acc, val) => {
        acc.unshift(val);
        return acc;
    }, [])
    console.log(reversedArray.join(' '))
}

reverseOrder([1, 4, 3, 2]);