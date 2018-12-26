var request = new XMLHttpRequest();

request.open('GET',
'https://api.unsplash.com/photos/random/auto=format/?client_id=0b8a92b14dc6846358089f2c986a5f15bbc1f99cfb6a38cd336084a18a24d6bc', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  var image_link = data["urls"]["regular"];
  var complete_link = "url(" + image_link + "}";
  document.body.style.backgroundImage = complete_link;
}

request.send();
