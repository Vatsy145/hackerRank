`use strict`

const modifyArray = (nums) => {
    return nums.map(val => {
      if(val%2 === 0) return val*2;
      else return val*3
    })
  }

console.log(modifyArray([1, 2, 3, 4, 5]))
