const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    */
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  /*
    Instead of user this function usually recives the id
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
  done(null, user);
});
//TODO: client info should be moved to env later for security
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "494742389689-4rib1jluqovjl8rh560v1p39921uljl6.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3001/auth/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
    */
      return done(null, profile);
    }
  )
);
