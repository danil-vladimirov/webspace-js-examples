// welcome splash screen for user to click and then he will be able to hear audio when he hovers object
// click on enter hides the whole thing

let welcome = document.querySelector('.splashscreen');

welcome.addEventListener('click', function(){
  welcome.style.display = "none";
})

// define objects contains audio

let item = document.querySelector('.square');
let audio = document.getElementById("audioclip");

// functions that plays and pause when mouse hovers object

item.addEventListener('mouseover', function(){
  audio.play();
})

item.addEventListener('mouseout', function(){
  audio.pause();
})