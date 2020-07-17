`use strict`

let button = document.getElementById('btn')
button.addEventListener('click', increment)

function increment(){
  button.innerHTML = Number(button.innerHTML) + 1
}
