`use strict`

function sides(literals, ...expressions) {
    console.log(`literals =`,literals);
    console.log(`expressions =`,expressions);
    let [a, p] = expressions;
    let s1 = (p + Math.sqrt(Math.pow(p,2) - (16 * a))) / 4;
    let s2 = (p - Math.sqrt(Math.pow(p,2) - (16 * a))) / 4;
    return [ s1, s2].sort();
  }
  
  console.log(sides`The area is: ${5 * 3}.\nThe perimeter is: ${2 * (5 + 3)}.`)
