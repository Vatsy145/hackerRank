`use starict`

function staircase(n) {
    var string = ``;
    for(let i=1 ; i<=n ;i++){
      for(let j = 1; j <= n - i; j++) string += ` `;
      for(let k = 1; k <= i; k++) string += `#`;
      console.log(string)
      string = ``;
    }
  }

  staircase(4)
  staircase(6)
  