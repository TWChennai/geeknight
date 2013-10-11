var targetTS = targetDate.getTime(),
    $d = document.getElementById("days"),
    $h = document.getElementById("hours"),
    $m = document.getElementById("minutes"),
    $s = document.getElementById("seconds"),
    $tick = document.getElementById("tick"),
    $tock = document.getElementById("tock");

function updateCountDown() {
  var currentDate = new Date().getTime();
  var secondsLeft = (targetTS - currentDate) / 1000;

  var days = parseInt(secondsLeft / 86400);
  secondsLeft = secondsLeft % 86400;

  var hours = parseInt(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  var minutes = parseInt(secondsLeft / 60);
  var seconds = parseInt(secondsLeft % 60);

  $d.innerHTML = days;
  $h.innerHTML = hours;
  $m.innerHTML = minutes;

  if (seconds % 2 == 0) {
    $tick.innerHTML = seconds;
    $s.className = "";
  } else {
    $tock.innerHTML = seconds;
    $s.className = "odd";
  }
}

updateCountDown();
setInterval(updateCountDown, 1000);

var twLocation = [ 12.98398, 80.24626], mapLoaded = false;

var map = L.map('map', {
  scrollWheelZoom: false,
  center: twLocation,
  zoom: 17
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).on('tileload', function() {
  if (!mapLoaded) {
    document.getElementById("location").style.display = 'none';
    L.marker(twLocation).addTo(map)
      .bindPopup(document.getElementById("address"))
    .openPopup();
    mapLoaded = true;
  }
}).addTo(map)
