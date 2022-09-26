const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
//sudo systemctl start mongod
//sudo mongod --dbpath /home/max/mongo/data

const Surfspotmodel = require("./models/ScraperSpot.js");
const methodOverride = require("method-override");
const Surfspot = Surfspotmodel.Surfspot;
const surfSpotDescriptors=Surfspotmodel.surfSpotDescriptors
const asyncWrap = require("./utilities/asyncWrap")
const ExpressError= require("./utilities/ExpressError")

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
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async(req, res) => {
  const test = await Surfspot.findOne()
  //console.log(test.location.country);
  res.redirect("/surfspots");
});
app.post("/surfspots/search", asyncWrap(async (req, res) => {
  const surfspots = await Surfspot.find({ spotName: req.body.searchText})
  res.render("surfspots/index", { surfspots, title:"Results"})
  //res.send(req.body);
}));

app.get("/surfspots", asyncWrap(async (req, res) => {
  const surfspots = await Surfspot.find({});
  res.render("surfspots/index", { surfspots, title: "Surfspot Index" });
}));
app.get("/surfspots/new", (req, res) => {
  res.render("surfspots/new", { surfSpotDescriptors, title:"Submit New Surfspot" });
});
app.get("/surfspots/edit/:id", asyncWrap(async (req, res) => {
  const spotId = req.params.id;
  const spot = await Surfspot.findById(spotId);
  res.render("surfspots/edit", {
    spot,
    surfSpotDescriptors,
    title: `Edit Spot: ${spot.title}`,
  });
}));

app.put("/surfspots/edit/:id/", asyncWrap(async (req, res) => {
  const spotId = req.params.id;
  const updatedSpot = await Surfspot.findByIdAndUpdate(
    spotId,
    req.body.surfspot
  );
  res.redirect(`/surfspots/detail/${updatedSpot._id}`);
}));
app.get("/surfspots/detail/:id", asyncWrap(async (req, res) => {
  const spotId = req.params.id;
  const spot = await Surfspot.findById(spotId);
  res.render("surfspots/detailMap", { spot, title: `${spot.title}` });
}));
app.delete("/surfspots/:id", asyncWrap(async (req, res) => {
  const spotId = req.params.id;
  await Surfspot.findByIdAndDelete(spotId);
  res.redirect("/surfspots/");
}));
app.post("/surfspots/", asyncWrap(async (req, res) => {
  const newSpot = new Surfspot(req.body.surfspot);
  await newSpot.save();
  res.redirect("/surfspots");
}));
app.all('*', (req, res, next) => {
next(new ExpressError('PAGE NOT FOUND',404))
})
app.use((err,req, res,next) => {
  const { status = 500, message = 'ERROR' } = err;
  res.status(status).send(message)
});
app.listen(3000, () => {
  console.log("serving port 3000");
});
