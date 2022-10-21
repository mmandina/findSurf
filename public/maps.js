// Initialize and add the map
function initMap() {
  var script_tag = document.getElementById("mapsId");
  var lat = script_tag.getAttribute("Lat");
  let coordinates = lat.split(",");

  const spot = {
    lat: Number.parseFloat(coordinates[0]),
    lng: Number.parseFloat(coordinates[1]),
  };
  // The map, centered at the surfSpot
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: spot,
    mapTypeId: "hybrid",
  });
  // The marker, positioned at the surfSpot
  const marker = new google.maps.Marker({
    position: spot,
    map: map,
  });
}

window.initMap = initMap;
