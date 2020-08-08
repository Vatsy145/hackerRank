`use strict`

class Calculator {
    power(n, p) {
        if (n < 0 || p < 0) throw `n and p should be non-negative`
        return Math.pow(n, p)
    }
}
const cal = new Calculator;
console.log(cal.power(3, 5))
console.log(cal.power(2, 4))
console.log(cal.power(-1, -2))
console.log(cal.power(-1, 3))