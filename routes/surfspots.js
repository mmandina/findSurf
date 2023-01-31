const express = require('express');
const router = express.Router();
const Surfspotmodel = require('../models/ScraperSpot.js');
const Surfspot = Surfspotmodel.Surfspot;
const asyncWrap = require('../utilities/asyncWrap');
const mapsApiKey = require('../mapsAPIKey').mapsAPIKey;
const { isLoggedIn } = require('../middleware/isLoggedIn');
const { isAdmin } = require('../middleware/isAdmin');
const surfspotsForMainMap = require('../utilities/surfspotsForMainMap');

router.get(
  '/search/*',
  asyncWrap(async (req, res) => {
    let perPage = 10;
    let page = req.query.page || 1;
    let searchText = req.query.searchText;
    let count = 0;
    const searchRegex = new RegExp(/*"^" + */ searchText.toLowerCase(), 'i');
    const query = {
      $or: [
        {
          spotName: {
            $regex: searchRegex,
          },
        },
        {
          'location.country': {
            $regex: searchRegex,
          },
        },
        {
          'location.Subzone1': {
            $regex: searchRegex,
          },
        },
        {
          'location.Subzone2': {
            $regex: searchRegex,
          },
        },
        {
          'location.subzone3': {
            $regex: searchRegex,
          },
        },
        {
          'location.subzone4': {
            $regex: searchRegex,
          },
        },
      ],
    };
    //counts total of surfspots that match search
    Surfspot.countDocuments(query, function (err, number) {
      if (err) return next(err);
      count = number;
    }).clone();

    //searches the collection for matches of given string to location, or name of spot. case insensitive.
    const surfspots = Surfspot.find(query)
      //pagination for above results
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(function (err, surfspots) {
        if (err) return next(err);
        res.render('surfspots/searchResult', {
          surfspots,
          title: 'Results',
          current: page,
          pages: Math.ceil(count / perPage),
          searchText,
        });
      });
  })
);
router.get(
  '/mainMap',
  asyncWrap(async (req, res) => {
    //find all spots that have valid coordinates
    const surfspotsForMap = await Surfspot.find({ hasCoordinates: true });
    //surfspotsForMainMap extracts needed information for google maps marker info boxes
    // also parses the coordinates into format usable by google maps api
    let cleanedSurfSpots = await surfspotsForMainMap(surfspotsForMap);
    //convert the surfspots documents to JSON so it can be passed through
    cleanedSurfSpots = JSON.stringify(cleanedSurfSpots);
    res.render('surfspots/mainMap', {
      cleanedSurfSpots,
      apiKey: process.env.mapsAPIKey || mapsApiKey,
    });
  })
);
router.get(
  '/:page',
  asyncWrap(async (req, res) => {
    let perPage = 10;
    let page = req.params.page || 1;
    //pagination for the index. 10 per page
    const surfspots = Surfspot.find({})
      .skip(perPage * page)
      .limit(perPage)
      .exec(function (err, surfspots) {
        Surfspot.count().exec(function (err, count) {
          if (err) return next(err);
          res.render('surfspots/index', {
            surfspots,
            current: page,
            title: 'findSurf - Surfspot Index',
            pages: Math.ceil(count / perPage) - 1,
          });
        });
      });
  })
);

// router.get("/surfspots/new", (req, res) => {
//   res.render("surfspots/new", {
//     surfSpotDescriptors,
//     title: "Submit New Surfspot",
//   });
// });

router.get(
  '/edit/:id',
  isLoggedIn,
  isAdmin,
  asyncWrap(async (req, res) => {
    const spotId = req.params.id;
    const spot = await Surfspot.findById(spotId);
    res.render('surfspots/edit', {
      spot,
      title: `findSurf - Edit Spot: ${spot.title}`,
    });
  })
);

router.put(
  '/edit/:id/',
  isLoggedIn,
  isAdmin,
  asyncWrap(async (req, res) => {
    const spotId = req.params.id;
    const updatedSpot = await Surfspot.findByIdAndUpdate(
      spotId,
      req.body.surfspot
    );
    res.redirect(`/surfspots/detail/${updatedSpot._id}`);
  })
);

router.get(
  '/detail/:id',
  asyncWrap(async (req, res) => {
    const spotId = req.params.id;
    const spot = await Surfspot.findById(spotId);
    res.render('surfspots/detailMap', {
      spot,
      title: `findSurf - ${spot.title}`,
      apiKey: process.env.mapsAPIKey || mapsApiKey,
    });
  })
);

router.delete(
  '/:id',
  isLoggedIn,
  isAdmin,
  asyncWrap(async (req, res) => {
    const spotId = req.params.id;
    await Surfspot.findByIdAndDelete(spotId);
    res.redirect('/surfspots/index');
  })
);

// router.post(
//   "/",
//   isLoggedIn,
//   isAdmin,
//   asyncWrap(async (req, res) => {
//     const newSpot = new Surfspot(req.body.surfspot);
//     await newSpot.save();
//     res.redirect("/surfspots");
//   })
// );

module.exports = router;
