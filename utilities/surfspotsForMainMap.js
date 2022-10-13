const CoordinatesConv = require("coordinate-parser");

async function surfspotsForMainMap(surfspots) {
  let spotCoordsIdsNames = [];

  for (let spots of surfspots) {
    let spot = {};
    let coordinate = coordinateConverter(spots);
    spot.Lat = coordinate[0];
    spot.Long = coordinate[1];
    spot.id = spots._id.toString();
    spot.spotName = spots.spotName;
    spot.location = locationStringify(spots);
    spot.description = spots.info.description;
    spot.experience = spots.surfSpotQuality.experience;
    spotCoordsIdsNames.push(spot);
  }
  return spotCoordsIdsNames;
}

let coordinateConverter = function (spot) {
  let lat = spot.coordinates.Lat;
  let lon = spot.coordinates.Lon;
  let converted;

  converted = new CoordinatesConv(`${lat}, ${lon}`);
  let newLat = converted.getLatitude();
  let newLong = converted.getLongitude();

  return [newLat, newLong];
};
locationStringify = function (spot) {
  let locationArray = Object.values(spot.location);
  let locationString = "";
  for (let i = 0; i < locationArray.length; i++) {
    let value = locationArray[i];
    if (locationArray[i]) {
      locationString += value;
      if (locationArray[i + 1]) {
        locationString += ", ";
      }
    } else {
      locationString += "";
    }
  }
  return locationString;
};
module.exports = surfspotsForMainMap;
