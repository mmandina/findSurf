module.exports.isAdmin = (req, res, next) => {
  //checks if the request user data has isAdmin set to true
  if (!req.user.isAdmin) {
    req.session.returnTo = req.originalUrl.split("/");
    //checks if redirected from edit page
    if (req.session.returnTo[2] === "edit") {
      req.session.returnTo = req.session.returnTo[3];
    } else {
      //If not from edit page, then from delete page (only two paths currently requiring admin priviliges)
      req.session.returnTo = req.session.returnTo[2].split("?")[0];
    }
    if (req.session.returnTo) {
      req.session.returnTo = "/surfspots/detail/" + req.session.returnTo;
    } else req.session.returnTo = "/surfspots/index/";
    console.log(req.session);
    req.flash("error", "Only Admins Have Edit/Delete Permissions!");
    return res.redirect(req.session.returnTo);
  }
  next();
};
