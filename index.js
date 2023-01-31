const express = require('express');
const path = require('path');
const app = express();

const flash = require('connect-flash');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const asyncWrap = require('./utilities/asyncWrap');
const ExpressError = require('./utilities/ExpressError');
const URI = require('./connectString').connectString;
const port = process.env.PORT || 3000;
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');
const MongoSanizite = require('express-mongo-sanitize');
const helmet = require('helmet');

//import surfspot routes
const surfspotRoutes = require('./routes/surfspots');

//connect MongoDB, use Heroku environmental variable or local
const MongoDBStore = require('connect-mongo');
mongoose
  .connect(process.env.mongoDBKey || URI, {
    usenewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongo Connected');
  })
  .catch((err) => {
    console.log('Mongo ERROR:');
    console.log(err);
  });
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Used helmet security middlewear, with contentSecurityPolicy disabled
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);
//Prevented mongoDB injection attacks
app.use(MongoSanizite());

//Use MongoDB to store session information
const store = MongoDBStore.create({
  mongoUrl: process.env.mongoDBKey || URI,
  secret: process.env.SECRET || 'TEST SECRET',
  touchAfter: 24 * 60 * 60,
});
const sessionConfig = {
  store,
  name: 'sessionFindSurf',
  secret: process.env.SECRET || 'TESTSECRET',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    // secure: true,
  },
};

app.use(session(sessionConfig));

//Use passport for authentication/accounts
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static('public'));
app.use(flash());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(favicon('./favicon.ico'));

//Add flash middleware to allow popups
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

app.use('/surfspots', surfspotRoutes);

app.get(
  '/home',
  asyncWrap(async (req, res) => {
    res.render('home', {
      title: 'findSurf - Home Page',
    });
  })
);

app.get(
  '/register',
  asyncWrap(async (req, res) => {
    res.render('users/register', {
      title: 'findSurf - Register New User',
    });
  })
);

app.post('/register', async (req, res, next) => {
  //add new user to users collection
  try {
    const { email, username, password } = req.body;
    const user = new User({
      email,
      username,
    });
    const newUser = await User.register(user, password);
    req.login(newUser, (err) => {
      if (err) return next(err);
      req.flash('success', 'Aloha! Welcome to findSurf');
      res.redirect('/surfspots/index');
    });
  } catch (error) {
    req.flash('error', error.message);
    res.redirect('/register');
  }
});

app.get(
  '/login',
  asyncWrap(async (req, res) => {
    res.render('users/login', {
      title: 'findSurf - Login',
    });
  })
);

app.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    } else {
      req.flash('success', 'Successfully Logged Out');
      res.redirect('/surfspots/index');
      return;
    }
  });
});

app.post(
  '/login',
  //use passport middlewear to make sure account is valid and log the user in
  passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: '/login',
    keepSessionInfo: true,
  }),

  async (req, res) => {
    req.flash('success', 'Welcome Back!');
    //if redirected from a failure to edit/delete a spot, pass through the spot ID from request session data
    let visitLast = req.session.returnTo;
    delete req.session.returnTo;
    //if undefined (not redirected from an unlogged in attempt to edit/delete a post, redirect to the index)
    if (visitLast === undefined) visitLast = '/surfspots/index';
    res.redirect(visitLast);
  }
);

app.get('/', async (req, res) => {
  res.redirect('/home');
});

app.all('*', (req, res, next) => {
  next(new ExpressError('PAGE NOT FOUND', 404));
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'ERROR' } = err;
  res.status(status).send(message);
});

app.listen(port, () => {
  const port = process.env.PORT ? process.env.PORT : '3000';
  console.log('Serving Port: ' + port);
});
