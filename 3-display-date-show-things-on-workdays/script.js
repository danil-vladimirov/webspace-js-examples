// first we need to get the current date

var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// then show it in div with 'date' class name

document.querySelector('.date').innerHTML = date;

// get objects to show/hide in weekdays/weekend

let myJob = document.querySelector('.weekdays')
let weekend = document.querySelector('.weekend')

// get current day

let day = today.getDay();

// if day is less than 5 show div with 'weekdays' class name + hide other one
if (day < 5) {
    myJob.style.display = "none";
    weekend.style.display = "block";
}
// vice versa
else {
  myJob.style.display = "block";
  weekend.style.display = "none";
}
