// TODO: Anonymous user types into search bar
// TODO: Anonymous user sorts by distance
// TODO: Anonymous user sorts by newest
// TODO: Anonymous user sorts by distance and newest
// TODO: Anonymous user registers
// TODO: Anonymous user logs in
// TODO: Donator user logs out
// TODO: Donator user sorts by newest
// TODO: Donator user filters by open, pending (claimed), completed

const express = require("express");
const app = express();
const PORT = 3000;

const axios = require("axios");
const morgan = require("morgan");
const db = require("./db/index.js");
const User = require("./Models/user.js");
const controller = require("./db/controller.js");
const {
  getAllListings,
  getNonCharityListings,
  createUser,
  updateToken,
  checkIfUserExists,
  checkUserAtLogin,
  sendBackUserID,
  getUserAllListings,
  getUserClaimedListings,
  getUserCancelledListings,
  postListing,
  cancelListing,
  markAsClaimed,
  markAsComplete,
} = require("./db/controller.js");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

// app.post("/listings/", (req, res) => {
//   const body = req.body;
//   console.log("req.body >>>>", body);
//   controller.postListing(body, (err) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.sendStatus(204);
//     }
//   });
// });

// app.put("/v1/donations/claimed/:listingId", (req, res) => {
//   console.log("req.params >>>>", req.params);
//   controller.markAsClaimed(req.params.listingId, req.body, (err) => {
//     // check for valid input?
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.status(200).send("marked complete");
//     }
//   });
// });

// app.put("/v1/donations/completed/:listingId", (req, res) => {
//   console.log("req.params >>>>", req.params);
//   controller.markAsComplete(req.params.listingId, (err) => {
//     // check for valid input?
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.status(200).send("marked complete");
//     }
//   });
// });

// app.get("/v1/userclaimedlistings/:userID", (req, res) => {
//   console.log("req.params >>>>", req.params);
//   controller.getUserClaimedListings(req.params.userID, (err, responseData) => {
//     // check for valid input?
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.status(200).send(responseData);
//     }
//   });
// });

// get all donations
app.get("/v1/donations/", (req, res) => {
  getAllListings((err, responseData) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(responseData);
    }
  });
});

// get all non-charity listings
app.get("/v1/noncharityListings/", (req, res) => {
  getNonCharityListings((err, responseData) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(responseData);
    }
  });
});

// get user donation listings for dashboard
app.get("/v1/donations/:userId", (req, res) => {
  getUserAllListings(req.params.userId, (err, responseData) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(responseData);
    }
  });
});

// get user CLAIMED donation listings for dashboard
app.get("/v1/claimedDonations/:userId", (req, res) => {
  getUserClaimedListings(req.params.userId, (err, responseData) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(responseData);
    }
  });
});

// get user CANCELLED donation listings for dashboard
app.get("/v1/cancelledDonations/:userId", (req, res) => {
  getUserCancelledListings(req.params.userId, (err, responseData) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(responseData);
    }
  });
});

// add new donation
app.post("/v1/donations", (req, res) => {
  postListing(req.body, (err, responseData) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(201).send(responseData);
    }
  });
});

// update specific donation
app.put("/v1/donations/:listingId", (req, res) => {
  if (req.body.status === "pending") {
    markAsClaimed(req.params.listingId, req.body, (err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).send("marked listing as cancelled");
      }
    });
  } else if (req.body.status === "closed") {
    markAsComplete(req.params.listingId, (err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).send("marked listing as cancelled");
      }
    });
  } else if (req.body.status === "cancelled") {
    cancelListing(req.params.listingId, (err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).send("marked listing as cancelled");
      }
    });
  }
});

/* TODO: DELETE. Status code notes for easy access
relevant status codes:
200 - OK
201 - created
204 - no content
400 - bad request
401 - unauthorized
403 - forbidden
404 - not found
405 - method not allowed
408 - request timed out
429 - too many requests
500 - internal server error
503 - serve unavailable


//***IN PROGRESS****

//  TODO: how to handle user login and logout?

//   user login
//   user logout
//   app.post("/v1/registration", (req, res) => {
//     res.status(200).send("ok");
//   });

  // importing user context
const User = require("./model/user");

// Register

// Get user input and validate it
// Validate if user already exists
// Encrypt user pw
// Create a user in the db
// Create a signed JWT token

//**TODO: limit on pw chars, token chars? */

app.post("/signup", (req, res, next) => {
  var username = req.body.username;
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  var newuser = User.create({ username, name, email, password });
  res.status(200).send(newuser.email);
});

app.post("/login", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  res.status(200).send(username);
});

//TODO:

//signup

// check if user already exist in db
// const oldUser = await User.findOne({ email });

// if (oldUser) {
//   return res.status(409).send("You already have an account, please use that to log in.");
// }

//Encrypt user password
// const encryptedPassword = bcrypt.hash(password, 10);

// Create user in our database
// const user = await User.create({
//   name,
//   username,
//   email: email.toLowerCase(),
//   password: encryptedPassword,
//   token: null,
// });

// Create token - **TODO update for already created token
// const token = jwt.sign(
//   { user_id: user._id, email },
//   process.env.TOKEN_KEY,
//   //TODO: set up dotenv w token key
//   {
//     expiresIn: "1h",
//     //TODO: enough time, change time?
//   }
// );
// // save user token
// user.token = token;

// return new user

// } catch (err) {
//   console.log(err);
// }

// Login
app.post("/login", (req, res) => {
  // our login logic goes here
  res.status(200).send("successfully hit login");
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`);
});
