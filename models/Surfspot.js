//deprecated Schema from first iteration/concept test
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bottomcomp = ["Coral", "Rock", "Sand", "Mixed"];
const breaktypes = ["Point", "Beach", "Reef"];
const difficulties = ["Beginner", "Intermediate", "Advanced", "Eddie"];
exports.surfSpotDescriptors = { bottomcomp, breaktypes, difficulties };
SurfspotSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bottomcomp: {
    type: String,
    enum: bottomcomp,
  },
  breaktype: {
    type: String,
    enum: breaktypes,
  },
  difficulty: {
    type: String,
    enum: difficulties,
  },
  description: {
    type: String,
  },
  image: String,
});
// let exportObj = {};
// exportObj.Surfspot = mongoose.model("Surfspot", SurfspotSchema);
// exportObj.surfSpotDescriptors = surfSpotDescriptors;
exports.Surfspot = mongoose.model("Surfspot", SurfspotSchema);
