var request = new XMLHttpRequest();

request.open('GET',
'https://api.unsplash.com/photos/random/?client_id=&query=nature,water,flowers,plants,lights,city', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  var image_link = data["urls"]["regular"];
  var complete_link = "url(" + image_link + "}";
  document.body.style.backgroundImage = complete_link;
  document.body.style.backgroundSize = "1290px 620px";
}
// request.send();
document.body.style.backgroundColor = '#E0AC9D';

//======================================================================

var day = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var greeting = document.getElementById('greeting');
greeting.innerText = "Happy " + weekday[day.getDay()] + ", Angela."

var time = document.getElementById('time');
var hour = day.getHours() % 12;
if (hour == 0){
  hour = 12;
}

var min = day.getMinutes();

if (min < 10){
  min = "0" + min;
}

time.innerText = hour + ":" + min;

//=============================================================================


var gmail = document.getElementById("gmail");
var canvas = document.getElementById("canvas");
var fb = document.getElementById("fb");

var openWindow = function(e){
  window.open(e.path[0].alt, '_self');
}

// var icons = document.getElementsByTagName('img');
gmail.addEventListener("click", openWindow);
canvas.addEventListener("click", openWindow);
fb.addEventListener("click", openWindow);
