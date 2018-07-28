function displayForecast(forecast) {
  // Your code here
}


function getForecast() {
  var request = new XMLHttpRequest();
  request.addEventListener("load", displayForecast);
  request.open("GET", "https://us-central1-terminus-161218.cloudfunctions.net/noah/four_hour_forecast");
  request.send();
}
