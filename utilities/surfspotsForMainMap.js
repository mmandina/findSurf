const CoordinatesConv = require("coordinate-parser");

async function surfspotsForMainMap(surfspots) {
  let spotCoordsIdsNames = {};
  let key = 0;
  for (let spots of surfspots) {
    let spot = {};
    spot.Lat = coordinateConverterLat(spots);
    spot.Long = coordinateConverterLong(spots);
    spot.spotName = spots.spotName;
    //spot.location = spots.locationStringify();

    spotCoordsIdsNames[key] = { spot };
    key++;
  }
  //console.log(spotCoordsIdsNames);
  return spotCoordsIdsNames;
}
let coordinateConverterLat = function (spot) {
  let lat = spot.coordinates.Lat;
  let lon = spot.coordinates.Lon;
  let converted;

  converted = new CoordinatesConv(`${lat}, ${lon}`);
  let newLat = converted.getLatitude();
  let newLong = converted.getLongitude();

  return newLat;
};
let coordinateConverterLong = function (spot) {
  let lat = spot.coordinates.Lat;
  let lon = spot.coordinates.Lon;
  let converted;

  converted = new CoordinatesConv(`${lat}, ${lon}`);
  let newLat = converted.getLatitude();
  let newLong = converted.getLongitude();

  return newLong;
};
module.exports = surfspotsForMainMap;
