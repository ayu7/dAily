var request = new XMLHttpRequest();

request.open('GET',
'https://api.unsplash.com/photos/random/auto=format/?client_id=<UR KEY HERE>', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  var image_link = data["urls"]["regular"];
  var complete_link = "url(" + image_link + "}";
  document.body.style.backgroundImage = complete_link;
}

request.send();
