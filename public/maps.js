// Initialize and add the map
console.log("TEST");
function initMap() {
  var script_tag = document.getElementById('mapsId')
  var lat = script_tag.getAttribute("Lat")
  
  console.log(lat);
  let coordinates = lat.split(',')
  console.log(coordinates);
  /*we get here if the string is not valid coordinates or format is inconsistent between lat and long*/

  const spot = { lat: Number.parseFloat(coordinates[0]), lng: Number.parseFloat(coordinates[1]) };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: spot,
    mapTypeId: 'hybrid'
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: spot,
    map: map,
  });
}



window.initMap = initMap;