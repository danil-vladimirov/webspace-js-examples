// first we need to get date

var today = new Date();

// then get current hour out of date

var hours = today.getHours();

if (hours > 19 || hours < 6) {
// If time is after 7PM or before 6AM, apply night class to ‘body’
  document.body.className = "night"

  // also we want to blur object at night
  // select it first then add blur class

  let blurred = document.querySelector('.square')
  blurred.classList.add('blur');
}
  
else
  // Else use ‘day’ class
  document.body.className = "day";
