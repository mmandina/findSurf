const mongoose = require("mongoose");

const Surfspot = require("../models/ScraperSpot");
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

async function test() {
  await mongoose
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

  const spot = await Surfspot.findById("62a237610ec673a070ec8b90");
  console.log(spot);

 }
test()