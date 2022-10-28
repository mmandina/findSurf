module.exports.isLoggedIn = (req, res, next) => {
  //checks if user is logged in
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl.split("/");
    //redirect for edit pages
    if (req.session.returnTo[2] === "edit") {
      req.session.returnTo = req.session.returnTo[3];
    } else {
      //redirect for delete pages
      req.session.returnTo = req.session.returnTo[2].split("?")[0];
    }
    if (req.session.returnTo) {
      req.session.returnTo = "/surfspots/detail/" + req.session.returnTo;
    } else req.session.returnTo = "/surfspots/index/";
    console.log(req.session);
    req.flash("error", "You must be signed in first!");
    return res.redirect("/login");
  }
  next();
};
