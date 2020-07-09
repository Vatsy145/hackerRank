`use strict`

function getSecondLargest(nums) {
    let largestNumber = Math.max(...nums)
    return nums.reduce((acc,val) => {
      return val > acc && val !== largestNumber ? acc = val : acc
    }, -Infinity)
  }
  
  console.log(getSecondLargest([2, 3, 6, 6, 5]))
