`use strict`;

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    console.log(firstInteger + Number(secondInteger));
    console.log(firstDecimal + Number(secondDecimal));
    console.log(firstString + secondString);
}

performOperation(`12` , `4.32`, `is the best place to learn and practice coding!`)
