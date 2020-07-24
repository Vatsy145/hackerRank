`use strict`

function processData(input) {
    input = input.split("\n")
    var i = 1,
        phoneBook = {}
        // Add entries
    for (; i <= input[0]; i++) {
        let line = input[i].split(" ")
        phoneBook[line[0]] = line[1]
    }
    // Search
    for (; i < input.length; i++) {
        let result = phoneBook[input[i]]
        let respone = result !== undefined ? input[i] + "=" + result : "Not found"
        console.log(respone)
    }
}

let input = `3
  sam 99912222
  tom 11122222
  harry 12299933
  sam
  edward
  harry`;

processData(input);