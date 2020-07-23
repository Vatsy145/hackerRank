`use strict`

function processData(input) {
    let stringArray = input.split('\n'),
        even = [],
        odd = [];
    for (let i = 1; i <= Number(stringArray[0]); i++) {
        stringArray[i].split('').forEach((val, idx) => {
            if (idx % 2 === 0) even.push(val)
            else odd.push(val)
        })
        even = even.join('')
        odd = odd.join('')
        console.log(`${even} ${odd}`)
        even = [];
        odd = [];
    }
}

let input = `2
  Hacker
  Rank`;

processData(input)