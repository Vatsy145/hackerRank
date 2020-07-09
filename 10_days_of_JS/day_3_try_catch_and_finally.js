`use strict`

function reverseString(s) {
    try{
        let arr = s.split('').reverse().join('');
        console.log(arr)
    }catch{
        console.log(`s.split is not a function`);
        console.log(s);
    }
  }
  
  reverseString("1234");
  reverseString(1234);