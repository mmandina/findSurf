const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Surfspotmodel = require("../models/ScraperSpot.js");
const Surfspot=Surfspotmodel.Surfspot
const methodOverride = require("method-override");
console.log(Surfspot);
// mongoose
//   .connect("mongodb://localhost:27017/findSurf", {
//     usenewUrlParser: true,

//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Mongo Connected");
//   })
//   .catch((err) => {
//     console.log("Mongo ERROR:");
//     console.log(err);
//   });
mongoose
.connect("mongodb://localhost:27017/findSurf", {
  usenewUrlParser: true,

  useUnifiedTopology: true,
})
.then(() => {
  console.log("Mongo Connected");
})
.catch((err) => {
  console.log("Mongo ERROR:");
  console.log(err);
});
async function test() {
  const spot = await Surfspot.find();
  let i = 0;
  for (i=0; i < spot.length; i++){
    spot[i].image='teststring'
  }
  console.log(i);
  console.log(spot[0].image)
  console.log(spot[0].spotName)
  console.log(spot[0])
 }
test()