const express = require("express");
const app = express();
const PORT = 3001;
const axios = require("axios");
const morgan = require("morgan");

const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("../passport-setup");

app.use(cors());
// const db = require('./db/index.js');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Should configure this with an experation time, better keys, proxy and secure
app.use(
  cookieSession({
    name: "CDEx",
    keys: ["key1", "key2"],
  })
);

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Example protected and unprotected routes
app.get("/", (req, res) => res.send("Example Home page!"));
app.get("/failed", (req, res) => res.send("You Failed to log in!"));
//redirect route if logged in
app.get("/loggedin", isLoggedIn, (req, res) =>
  res.send(`Hello ${req.user.displayName}!`)
);

// Auth Routes
app.get(
  "/auth",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/loggedin");
  }
);
//destroy session
app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
