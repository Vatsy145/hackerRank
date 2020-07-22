`use strict`

function main() {
    // const N = 3;
    const N = 24;
    if (N % 2 === 0) {
        if (2 <= N <= 5) console.log(`Not Weird`)
        else if (6 <= N <= 20) console.log(`Weird`)
        else if (20 < N) console.log(`Not Weird`)
    } else console.log(`Weird`)
}
main()