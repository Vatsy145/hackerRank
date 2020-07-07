`use strict`

function getArea(length, width) {
    let area = length * width    
    return area;
}
function getPerimeter(length, width) {
    let perimeter = 2 * (length + width)    
    return perimeter;
}

console.log(getArea(3,4.5))
console.log(getPerimeter(3,4.5))
