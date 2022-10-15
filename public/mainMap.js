// Initialize and add the map
//TODO: Infoboxes, ad _id to cleaned spots for linking purposes
async function initMap() {
  let script_tag = document.getElementById("mapsId");
  let cleanSurfspots = JSON.parse(script_tag.getAttribute("surfspotsForMap"));

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

  let windowAlreadyOpen = false;
  let lastWindow;

  //The markers, positioned at the surfSpots
  for (let i = 0; i < cleanSurfspots.length; i++) {
    const pos = {
      lat: Number.parseFloat(cleanSurfspots[i].Lat),
      lng: Number.parseFloat(cleanSurfspots[i].Long),
    };
    let contentString = `<h6>${cleanSurfspots[i].spotName}</h6>
    <p><b>${cleanSurfspots[i].location}</b></p>
    <p>Experience Level: ${cleanSurfspots[i].experience}</p>
    <p>${cleanSurfspots[i].description}</p>
    <a href="/surfspots/detail/${cleanSurfspots[i].id}">Spot Details</a>
    `;
    let infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    const marker = new google.maps.Marker({
      position: pos,
      map: map,
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: true,
      });
      if (windowAlreadyOpen) {
        lastWindow.close();
      }
      lastWindow = infowindow;
      windowAlreadyOpen = true;
    });
  }
}

window.initMap = initMap;
