const express = require("express");
const path = require("path");
const app = express();
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const Surfspotmodel = require("./models/ScraperSpot.js");
const methodOverride = require("method-override");
const Surfspot = Surfspotmodel.Surfspot;
const surfSpotDescriptors = Surfspotmodel.surfSpotDescriptors;
const asyncWrap = require("./utilities/asyncWrap");
const ExpressError = require("./utilities/ExpressError");
const URI = require("./connectString").connectString;
const mapsApiKey = require("./mapsAPIKey").mapsAPIKey;
const port = process.env.PORT || 3000;
const surfspotsForMainMap = require("./utilities/surfspotsForMainMap");
mongoose
  .connect(URI, {
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
app.use(favicon("./favicon.ico"));
app.get("/", async (req, res) => {
  const test = await Surfspot.findOne();
  res.redirect("/surfspots/mainMap");
});

app.get(
  "/surfspots/search/*",
  asyncWrap(async (req, res) => {
    let perPage = 10;
    let page = req.query.page || 1;
    let searchText = req.query.searchText;
    let count = 0;
    await Surfspot.countDocuments(
      {
        $or: [
          {
            spotName: {
              $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
            },
          },
          {
            "location.country": {
              $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
            },
          },
          {
            "location.Subzone1": {
              $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
            },
          },
          {
            "location.Subzone2": {
              $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
            },
          },
          {
            "location.subzone3": {
              $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
            },
          },
          {
            "location.subzone4": {
              $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
            },
          },
        ],
      },
      function (err, number) {
        count = number;
      }
    ).clone();
    const surfspots = await Surfspot.find({
      $or: [
        {
          spotName: {
            $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
          },
        },
        {
          "location.country": {
            $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
          },
        },
        {
          "location.Subzone1": {
            $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
          },
        },
        {
          "location.Subzone2": {
            $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
          },
        },
        {
          "location.subzone3": {
            $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
          },
        },
        {
          "location.subzone4": {
            $regex: new RegExp(/*"^" + */ searchText.toLowerCase(), "i"),
          },
        },
      ],
    })
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(function (err, surfspots) {
        if (err) return next(err);
        res.render("surfspots/searchResult", {
          surfspots,
          title: "Results",
          current: page,
          pages: Math.ceil(count / perPage),
          searchText,
        });
      });
  })
);
app.get(
  "/surfspots/mainMap",
  asyncWrap(async (req, res) => {
    const surfspotsForMap = await Surfspot.find({ hasCoordinates: true });
    let cleanedSurfSpots = await surfspotsForMainMap(surfspotsForMap);
    cleanedSurfSpots = JSON.stringify(cleanedSurfSpots);
    res.render("surfspots/mainMap", {
      cleanedSurfSpots,
      apiKey: mapsApiKey,
    });
  })
);
app.get(
  "/surfspots/:page",
  asyncWrap(async (req, res) => {
    let perPage = 10;
    let page = req.params.page || 1;
    console.log;
    const surfspots = await Surfspot.find({})
      .skip(perPage * page)
      .limit(perPage)
      .exec(function (err, surfspots) {
        Surfspot.count().exec(function (err, count) {
          if (err) return next(err);
          res.render("surfspots/index", {
            surfspots,
            current: page,
            title: "findSurf - Surfspot Index",
            pages: Math.ceil(count / perPage) - 1,
          });
        });
      });
  })
);

app.get("/surfspots/new", (req, res) => {
  res.render("surfspots/new", {
    surfSpotDescriptors,
    title: "Submit New Surfspot",
  });
});

app.get(
  "/surfspots/edit/:id",
  asyncWrap(async (req, res) => {
    const spotId = req.params.id;
    const spot = await Surfspot.findById(spotId);
    res.render("surfspots/edit", {
      spot,
      surfSpotDescriptors,
      title: `findSurf - Edit Spot: ${spot.title}`,
    });
  })
);

app.put(
  "/surfspots/edit/:id/",
  asyncWrap(async (req, res) => {
    const spotId = req.params.id;
    const updatedSpot = await Surfspot.findByIdAndUpdate(
      spotId,
      req.body.surfspot
    );
    res.redirect(`/surfspots/detail/${updatedSpot._id}`);
  })
);

app.get(
  "/surfspots/detail/:id",
  asyncWrap(async (req, res) => {
    const spotId = req.params.id;
    const spot = await Surfspot.findById(spotId);
    res.render("surfspots/detailMap", {
      spot,
      title: `findSurf - ${spot.title}`,
      apiKey: mapsApiKey,
    });
  })
);

app.delete(
  "/surfspots/:id",
  asyncWrap(async (req, res) => {
    const spotId = req.params.id;
    await Surfspot.findByIdAndDelete(spotId);
    res.redirect("/surfspots/");
  })
);

app.post(
  "/surfspots/",
  asyncWrap(async (req, res) => {
    const newSpot = new Surfspot(req.body.surfspot);
    await newSpot.save();
    res.redirect("/surfspots");
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError("PAGE NOT FOUND", 404));
});

app.use((err, req, res, next) => {
  const { status = 500, message = "ERROR" } = err;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log("Serving Port: " + process.env.PORT);
});
