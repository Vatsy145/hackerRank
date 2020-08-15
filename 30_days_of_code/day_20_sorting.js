`use strict`

function bubbleSort(arr) {
    let numSwaps = 0;
    for (let i = 0; i < arr.length; i++) {
        // Track number of elements swapped during a single array traversal
        for (let j = 0; j < arr.length; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (arr[j] > arr[j + 1]) {
                let [a, b] = [arr[j], arr[j + 1]]
                arr[j] = b
                arr[j + 1] = a
                    // let temp = arr[j]
                    // arr[j] = arr[j + 1]
                    // arr[j + 1] = temp
                numSwaps++
            }
        }
        // If no elements were swapped during a traversal, array is sorted
        if (numSwaps === 0) break
    }
    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${arr[0]}`);
    console.log(`Last Element: ${arr[arr.length - 1]}`);
    // console.log(`Final Array: ${arr}`);
}
bubbleSort([3, 2, 1]);
bubbleSort([1, 2, 3, 4, 5]);
bubbleSort([-3, 5, 2, 0, 6, 1]);