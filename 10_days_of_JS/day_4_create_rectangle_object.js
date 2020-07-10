`use strict`

function Rectangle(a, b) {
    let area = a * b
    // let perimeter = Math.pow(a,2) + Math.pow(b,2)
    let perimeter = a + a + b + b
    let rec = {area,perimeter,length: a,width:b}
    return rec
  }

  const rec = new Rectangle(4,5);
  
  console.log(rec.length)
  console.log(rec.width)
  console.log(rec.perimeter)
  console.log(rec.area)
