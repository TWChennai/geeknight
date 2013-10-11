if (window.L) {
  document.getElementById("map").style.display = "block";
  var twLocation = [ 12.98398, 80.24626 ], mapLoaded = false;

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
}
