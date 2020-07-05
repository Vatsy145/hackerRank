`ues strict`

function timeConversion(s) {
    let time = s.slice(0, s.length - 2).split(`:`)
    let dayTime = s.slice(s.length - 2)
    if(dayTime === `PM` && time[0] !== `12`) time[0] = Number(time[0]) + 12
    else if(dayTime === `AM` && time[0] === `12`) time[0] = `00`
    return time.join(`:`)
  }
  
  console.log(timeConversion(`12:05:45AM`))
  console.log(timeConversion(`04:05:45AM`))
  console.log(timeConversion(`12:05:45PM`))
  console.log(timeConversion(`04:05:45PM`))
