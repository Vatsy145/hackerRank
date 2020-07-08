`use strict`

function getLetter(s) {
    let letter, firstChar = s.charAt(0);
    if(`aioue`.includes(firstChar)) letter = `A`  
    else if(`bcdfg`.includes(firstChar)) letter = `B`
    else if(`hjklm`.includes(firstChar)) letter = `C`
    else if(`npqrstvwxyz`.includes(firstChar)) letter = `D`
    return letter;
  }
  
  console.log(getLetter(`adfgt`))
