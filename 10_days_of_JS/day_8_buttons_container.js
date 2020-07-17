`use strict`

let button, elements = [], numsArray = [1, 2, 3, 6, 9, 8, 7, 4];
for(let i = 0; i < numsArray.length ; i++) {
    elements.push(document.querySelector(`#btn${numsArray[i]}`));
}

button = document.getElementById('btn5');
button.addEventListener('click', rotate);

function rotate(){
    let last = numsArray.pop();
    numsArray.unshift(last);
    for(let i = 0; i < numsArray.length ; i++){ 
        elements[i].innerHTML = numsArray[i];
    }
}
