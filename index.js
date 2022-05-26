const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Surfspotmodel = require("./models/Surfspot.js");
const methodOverride = require("method-override");
const Surfspot = Surfspotmodel.Surfspot;
const surfSpotDescriptors=Surfspotmodel.surfSpotDescriptors


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

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/surfspots", async (req, res) => {
  const surfspots = await Surfspot.find({});
  res.render("surfspots/index", { surfspots, title: "Surfspot Index" });
});
app.get("/surfspots/new", (req, res) => {
  res.render("surfspots/new", { surfSpotDescriptors, title:"Submit New Surfspot" });
});
app.get("/surfspots/:id/edit", async (req, res) => {
  const spotId = req.params.id;
  const spot = await Surfspot.findById(spotId);
  res.render("surfspots/edit", {
    spot,
    surfSpotDescriptors,
    title: `Edit Spot: ${spot.title}`,
  });
});

app.put("/surfspots/:id/edit", async (req, res) => {
  const spotId = req.params.id;
  const updatedSpot = await Surfspot.findByIdAndUpdate(
    spotId,
    req.body.surfspot
  );
  res.redirect(`/surfspots/${updatedSpot._id}`);
});
app.get("/surfspots/:id", async (req, res) => {
  //res.send(req.params)
  const spotId = req.params.id;
  const spot = await Surfspot.findById(spotId);
 
  res.render("surfspots/detail", { spot, title: `${spot.title}` });
});
app.delete("/surfspots/:id", async (req, res) => {
  const spotId = req.params.id;
  await Surfspot.findByIdAndDelete(spotId);
  res.redirect("/surfspots/");
});
app.post("/surfspots/", async (req, res) => {
  
  const newSpot = new Surfspot(req.body.surfspot);
  await newSpot.save();
  res.redirect("/surfspots");
});
app.use((req, res) => {
  res.status(404).send(`${req.method} ${req.path} 404 NOT FOUND`);
});
app.listen(3000, () => {
  console.log("serving port 3000");
});
