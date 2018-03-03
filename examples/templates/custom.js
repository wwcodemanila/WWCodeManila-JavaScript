function displayForecast(forecast) {
  var anchor = document.getElementById("forecast"),
    html;

  if (typeof forecast === "undefined") {
    html = "Unknown";
  } else {
    html = forecast.data[0].chance_of_rain;
  }

  anchor.innerHTML = html;
}

function parseForecast() {
  var location = "Taguig, Metro Manila",
    json = JSON.parse(this.responseText),
    data;

  for (var i = 0; i < json.length; i++) {
    if (json[i].location == location) {
      data = json[i];
      break;
    }
  }

  displayForecast(data);
}

function getForecast() {
  var request = new XMLHttpRequest();
request.addEventListener("load", parseForecast);
  request.open("GET", "https://us-central1-terminus-161218.cloudfunctions.net/noah/four_hour_forecast");
  request.send();
}
