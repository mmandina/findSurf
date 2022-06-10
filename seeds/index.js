const mongoose = require("mongoose");

const Surfspot = require("../models/ScraperSpot");

const scrapedData= require("./Scraped")
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

// const spotNames = [
//   "Mike's right",
//   "Mandina's",
//   "Max's Left",
//   "Middles",
//   "Lefts",
//   "The Pipe",
//   "Pipeline",
//   "Punta Conejo",
//   "Gums",
//   "White Plains",
//   "Rocky Point",
//   "Ehu Kai",
//   "Publics",
//   "Darlington",
//   "Lanterns",
//   "Ship Sterns",
//   "Dbah",
//   "Snapper Rocks",
//   "Impossibles",
//   "Uluwatu",
//   "Lareine",
//   "Lighthouse",
//   "La Bamba",
//   "Populars",
//   "Boneyards",
//   "Sandy Beach",
//   "Rock Piles",
//   "Log Cabins",
//   "Gunneson",
//   "Sandy Hook Pt.",
//   "J Street",
//   "L Street",
//   "PB Beach Drive",
//   "OB Pier",
//   "Mission Beach Jetty",
//   "Mission Beach",
//   "Ocean Beach Jetty",
//   "Bai Dai Beach",
//   "Hobbits",
//   "Knife's Edge",
//   "Shredders",
//   "Juniors",
//   "Slotmachines",
//   "Asbury Dog Park",
//   "Tilly's",
//   "Shotgun's",
//   "93rd Street",
//   "Ylig Bay",
// ];
// const locations = [
//   "North Shore, Oahu",
//   "Gold Coast, Australia",
//   "Bali, Indonesia",
//   "Monmouth County, NJ",
//   "Nicaragua",
//   "Oaxaca, Mexico",
//   "San Diego",
//   "Nah Trang, Vietnam",
//   "South Shore, Oahu",
//   "Channel Islands",
//   "Solomon Islands",
//   "Long Beach, NY",
//   "Guam",
// ];
// const bottom = ["Coral", "Rock", "Sand", "Mixed"];
// const difficulty = ["Beginner", "Intermediate", "Advanced", "Eddie"];
// const breaktype = ["Point", "Beach", "Reef"];

// async function seedDB() {
//   await Surfspot.deleteMany({});
//   for (let i = 0; i < spotNames.length; i++) {

//     let newSpot = new Surfspot({
//       title: spotNames[i],
//       location: locations[Math.floor(Math.random() * locations.length)],
//       bottomcomp: bottom[Math.floor(Math.random() * bottom.length)],
//       breaktype: breaktype[Math.floor(Math.random() * breaktype.length)],
//       difficulty: difficulty[Math.floor(Math.random() * difficulty.length)],
//       description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, odio, earum quod magni eos ullam itaque aut nisi fugiat nulla, sapiente ut officia! Quis a officia quod odio ratione tenetur.',
//       image:'/assets/alexander-popov-xhijwBiKESw-unsplash.jpg'
//     });
//     await newSpot.save();
//   }
// }
async function seedDB() {
  await Surfspot.deleteMany({});
  for (let i = 0; i < 5; i++) {
console.log(Scraped[i]);
    let newSpot = new Surfspot(
      scrapedData[i]
    );
    await newSpot.save();
  }
}
seedDB().then(() => {
  mongoose.connection.close();
});
