`use strict`

function vowelsAndConsonants(s) {
    let n = [], v = [], c = [], vowels = ['a', 'e', 'i', 'o', 'u'];
    n = s.split('');
    n.forEach( char => {
        if(vowels.includes(char)) v.push(char);
        else c.push(char);
    });
    let final = [...v, ...c];
    final.forEach(char => console.log(char));
  }
  
  vowelsAndConsonants(`javascriptloops`)
