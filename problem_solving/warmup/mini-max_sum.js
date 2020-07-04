`use starict`;

function miniMaxSum(arr) {
    arr.sort((a, b) => a-b)
    // let min = arr.reduce((acc, val, idx) => {
    //   if(idx !== arr.length - 1) acc += val;
    //   return acc;
    // }, 0);
    // let max = arr.reduce((acc, val, idx) => {
    //   if(idx !== 0) acc += val;
    //   return acc;
    // }, 0);
    let min = 0, max = 0;
    for(let i=0; i < arr.length; i++){
      if(i !== arr.length - 1) min += arr[i]; 
      if(i !== 0) max += arr[i]; 
    }
    console.log(`${min} ${max}`);
  }
  
  miniMaxSum([1, 2, 3, 4, 5]);
  miniMaxSum([7, 69, 2, 221, 8974]);
  miniMaxSum([5, 3, 1, 9, 7]);

