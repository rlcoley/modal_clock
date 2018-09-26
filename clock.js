var showtime = document.createElement('div');
showtime.style.height = "200px"
showtime.style.textAlign = "center"
showtime.style.width = "65%"
showtime.style.marginLeft = "20%"
showtime.style.marginTop = "200px"
showtime.style.border = "5px solid white"

document.body.appendChild(showtime)

function timeShock() {
  var d = new Date ();

  // get Hours
  var hours = d.getHours()

  // get minutes
  var minutes = d.getMinutes()

  // get seconds
  var seconds = d.getSeconds()
  // console.log(hours + ":" + minutes + ":" + seconds);

  // adding zero to seconds
  if (seconds == 0 || seconds == 1 || seconds == 2 || seconds == 3 || seconds == 4 || seconds == 5 || seconds == 6 || seconds == 7 || seconds == 8 || seconds == 9 ) {
     seconds = "0" + seconds;

  }

// adding zero to minutes
   if (minutes == 0 || minutes == 1 || minutes == 2 || minutes == 3 || minutes == 4 || minutes == 5 || minutes == 6 || minutes == 7 || minutes == 8 || minutes == 9 ) {
      minutes = "0" + minutes;

  }

  // adding zero to hours
   if (hours == 0 || hours == 1 || hours == 2 || hours == 3 || hours == 4 || hours == 5 || hours == 6 || minutes == 7 || minutes == 8 || minutes == 9 ) {
       hours = "0" + hours;

    }
    document.body.style.backgroundColor = '#' + hours + minutes + seconds

  var displaytime = hours + ":" + minutes + ":" + seconds
  showtime.innerHTML = displaytime
  showtime.style.fontSize = "9em"

  // showtime.innerHTML = hours + minutes + seconds

}

function runClock() {
  setInterval(function(){timeShock()}, 100)

}


window.addEventListener('load', runClock)

// runClock()
// timeShock()
