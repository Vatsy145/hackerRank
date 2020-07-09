`use strict`

function isPositive(a) {
    if(a > 0) return `YES`;
    else if(a === 0) throw {message: `Zero Error`};
    else if(a < 0) throw {message: `Negative Error`};
  }

  function main() {
    // const moreThanNumberToTest = [2, 0, 6];
    // const moreThanNumberToTest = [1, 2, 3];
    const moreThanNumberToTest = [-1, 20];
    
    moreThanNumberToTest.forEach(a => {
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    })
  }

  main()
