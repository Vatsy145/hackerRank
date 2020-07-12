`use strict`

function getDayName(dateString) {
    let dayInfo, dayName;
    const options = {
      weekday: 'long'
    };
    // dayName = new Date(dateString).toLocaleString('en-us', options);
    dayInfo = new Date(dateString);
    dayName = dayInfo.toLocaleString('en-us', options)
    return dayName;
  }
  
  console.log(getDayName(`10/11/2009`))
