//Current schema in use

const mongoose = require("mongoose");
const CoordinatesConv = require("coordinate-parser");
const Schema = mongoose.Schema;

SurfspotSchema = new Schema({
  spotName: {
    //36th Street
    type: String,
    required: true,
  },
  location: {
    //USA, North East, New Jersey
    country: String, //USA
    Subzone1: String, //North East
    Subzone2: String, //New Jersey
    subzone3: String, //''
    subzone4: String, //''
    longFormLocation: String, //For new Submissions
  },

  hasCoordinates: {
    //True
    type: Boolean,
    required: true,
  },
  coordinates: {
    Lat: String, // 39° 9.431' N
    Lon: String, //74° 41.154' W
  },
  access: {
    description: String, //easy access. Park at any of the meters lining Landis Avenue or on the off str
    distance: String, //In the city
    walk: String, //Instant Access
    easyToFind: String, //Easy to Find
    publicAccess: String, //Public Access
    specialAccess: String, //Don't know
  },
  surfSpotQuality: {
    waveQuality: String, //Normal
    experience: String, //All Surfers
    frequency: String, //Very Consistent
  },
  waveChars: {
    type: { type: String }, //Sand-bar
    direction: String, //right and left
    bottom: String, //Sandy
    power: String, //Ordinary, fun
    length: String, //normal (50-100m)
    goodlength: String, //long (150-300m)
  },
  enviroChars: {
    swellDir: String, //North, South, SouthEast, East, NorthEast
    windDir: String, //NorthWest, West
    swellSize: String, //Starts working at Less than 1m / 3ft and holds up to 4m+ / 12ft
    tidePos: String, //Mid and high tide
    tideMov: String, //Rising and falling tides
  },
  miscDetails: {
    weekCrowd: String, //few surfers
    weekendCrowd: String, //crowded
    webcamUrl: String, //''
  },
  dangers: String, //Rips, Undertow, Rocks
  info: {
    description: String, //Consistent spot all year. During summer and hurricane season, the
    atmosphere: String, //This is a great spot especially if you are y
    general: String, //''
  },
  image: String,
});
SurfspotSchema.methods.locationStringify = function () {
  let locationArray = Object.values(this.location);
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
SurfspotSchema.methods.coordinateConverter = function () {
  let lat = this.coordinates.Lat;
  let lon = this.coordinates.Lon;
  let converted;

  converted = new CoordinatesConv(`${lat}, ${lon}`);
  let newLat = converted.getLatitude();
  let newLong = converted.getLongitude();

  return [newLat, newLong];
};

exports.Surfspot = mongoose.model("surfspotactive", SurfspotSchema);
