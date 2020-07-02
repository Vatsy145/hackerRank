`use strict`;

function plusMinus(arr) {
    let positive = 0, minus = 0, zero = 0;
    arr.forEach(val => {
      if(val === 0) zero++;
      else if(val < 0) minus++;
      else if(val > 0) positive++;
    })
    let positivePercentage = positive/arr.length;
    let minusPercentage = minus/arr.length;
    let zeroPercentage = zero/arr.length;
    console.log(positivePercentage.toFixed(6))
    console.log(minusPercentage.toFixed(6))
    console.log(zeroPercentage.toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1])
plusMinus([-1, -1, 0, 1, 1])