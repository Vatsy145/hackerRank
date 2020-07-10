`use strict`

function getCount(objects) {
    return objects.reduce((acc, obj) => {
        if(obj.x === obj.y) ++acc;
        return acc;
    }, 0)
}

let arr = [
    {x:1,y:1},
    {x:2,y:3},
    {x:3,y:3},
    {x:4,y:5},
    {x:2,y:1}
]

console.log(getCount(arr))