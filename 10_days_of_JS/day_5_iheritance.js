`use strict`

class Rectangle {
    constructor(w, h) {
        this.w = w
        this.h = h
    }
}

Rectangle.prototype.area = function(){
    if(this.h) return this.w * this.h
    else return Math.pow(this.w,2)
}

class Square extends Rectangle{
    constructor(length){
        super()
        this.w = length
    }
}

let rec = new Rectangle(2,8)
console.log(rec.area())
let sq = new Square(3)
console.log(sq.area())
