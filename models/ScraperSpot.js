const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//https://www.wannasurf.com/spot/North_America/USA/North_East/New_Jersey/36th_Street/index.html
SurfspotSchema = new Schema({
  spotName: { //36th Street
    type: String,
    required: true,
  },
  location: { //USA, North East, New Jersey
    country: String, //USA
    Subzone1: String, //North East
    Subzone2: String, //New Jersey
    subzone3: String, //''
    subzone4:String //''
  },
  hasCoordinates: { //True
    type: Boolean,
    required:true,
  },
  coordinates:{
    Lat: String,// 39° 9.431' N
    Long:String//74° 41.154' W
  },
  access: {
    description: String, //easy access. Park at any of the meters lining Landis Avenue or on the off str
    distance: String, //In the city
    walk:String, //Instant Access
    easyToFind: String, //Easy to Find
    publicAccess: String, //Public Access
    specialAccess:String, //Don't know
  },
    surfSpotQuality: {
      waveQuality: String, //Normal
      experience: String, //All Surfers
      frequency:String, //Very Consistent
    },
  waveChars: {
    type: String, //Sand-bar
    direction: String, //right and left
    bottom: String, //Sandy
    power: String, //Ordinary, fun
    length: String, //normal (50-100m)
    goodlength: String, //long (150-300m)
  },
  enviroChars: {
    swellDir: String,//North, South, SouthEast, East, NorthEast
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
  dangers: String,//Rips, Undertow, Rocks
  info: {
    description: String, //Consistent spot all year. During summer and hurricane season, the 
    atmosphere: String, //This is a great spot especially if you are y
    general:String, //''
  }
});