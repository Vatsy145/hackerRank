`ues strict`;

function birthdayCakeCandles(ar) {
    ar.sort((a,b) => a - b)
    let tallestCandle = ar[ar.length - 1]
    return ar.filter(val => val >= tallestCandle , []).length
  }
  
  console.log(birthdayCakeCandles([3, 2, 1, 3]))
  console.log(birthdayCakeCandles([4, 2, 4, 4, 1, 3]))
