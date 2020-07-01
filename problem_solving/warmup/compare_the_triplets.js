`use strict`;

function compareTriplets(a, b) {
    let Alice = 0, Bob = 0;
    for(let i=0; i < a.length; i++){
        if(a[i] > b[i]) Alice++;
        else if(a[i] < b[i]) Bob++;
    }
    return [Alice, Bob];
}

console.log(compareTriplets([5, 6, 7,],[3, 6, 10,]))
document.write(compareTriplets([5, 6, 7,],[3, 6, 10,]))