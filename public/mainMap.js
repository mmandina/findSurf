// Initialize and add the map
//TODO: Infoboxes, ad _id to cleaned spots for linking purposes
async function initMap() {
  let script_tag = document.getElementById("mapsId");
  //var pos = script_tag.getAttribute("Pos");
  let cleanSurfspots = JSON.parse(script_tag.getAttribute("surfspotsForMap"));
  console.log(cleanSurfspots);
  /*we get here if the string is not valid coordinates or format is inconsistent between lat and long*/
  const spot = {
    lat: 0,
    lng: 0,
  };
  // The map, centered at the surfSpot
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: spot,
    mapTypeId: "hybrid",
  });
  //The marker, positioned at the surfSpot

  for (let i = 0; i < cleanSurfspots.length; i++) {
    const pos = {
      lat: Number.parseFloat(cleanSurfspots[i].Lat),
      lng: Number.parseFloat(cleanSurfspots[i].Long),
    };
    const marker = new google.maps.Marker({
      position: pos,
      map: map,
    });
  }
}

window.initMap = initMap;
