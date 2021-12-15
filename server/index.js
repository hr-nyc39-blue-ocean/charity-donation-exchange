const express = require("express");
const app = express();
const PORT = 3000;
const axios = require("axios");
const morgan = require("morgan");
const db = require("./db/index.js");
const User = require("./Models/user.js");
const controller = require("./db/controller.js");
const bcrypt = require("bcrypt");
const { createTokens, validateToken } = require("./middleware/jwt.js");

const {
  getAllListings,
  getNonCharityListings,
  createUser,
  updateToken,
  checkIfUsernameOrEmailExists,
  checkIfUsernameExists,
  checkUserAtLogin,
  sendBackUserID,
  getUserAllListings,
  getUserClaimedListings,
  getUserCancelledListings,
  cancelListing,
  markAsClaimed,
  markAsComplete,
} = require("./db/controller.js");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

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
        res.status(200).send("marked listing as pending");
      }
    });
  } else if (req.body.status === "closed") {
    markAsComplete(req.params.listingId, (err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).send("marked listing as closed");
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
  const body = req.body;
  checkIfUsernameOrEmailExists(
    body.username,
    body.email,
    (err, responseData) => {
      if (err) {
        res.sendStatus(500);
      }

      const values = Object.values(responseData[0]);
      console.log(values, responseData[0]);

      if (values[0] > 0) {
        res.status(200).send("User already exists!");
      } else {
        bcrypt.hash(body.password, 10, (err, hash) => {
          //with that hash and body info create new user
          createUser(body, hash, (err) => {
            if (err) {
              res.sendStatus(500);
            } else {
              // if created successfully check db for userid and send that back
              controller.sendBackUserID(body.username, (err, data) => {
                if (err) {
                  res.status(500);
                } else {
                  console.log("inhasher", data);
                  var iddata = data[0];
                  for (const [key, value] of Object.entries(iddata)) {
                    checkuserid = `${value}`;
                    // res.status(200).send(checkuserid);
                  }
                  //with that id create an access token
                  const accessToken = createTokens(checkuserid);
                  res.cookie("access-token", accessToken, {
                    maxAge: 60 * 60 * 24 * 1000,
                  });
                  res.status(200).send("User created successfully!");
                  console.log("created successfully");
                  //saves user to db with hashed pw
                }
              });
            }
          });
        });
      }
    }
  );
});
// controller.checkIfEmailExists(body.email, (err, responseData) => {
//   if (err) {
//     res.sendStatus(500);
//   } else {
//     var resdata = responseData[0];
//     var checkemail = null;
//     for (const [key, value] of Object.entries(resdata)) {
//       checkemail = `${value}`;
//       // res.status(200).send(checkemail);
//     }
//     if (checkemail > 0 || checkusername > 0) {
//       res.status(400).send("user already exists");
//     } else {
//       // res.status(200).send("missing");
//       controller.createUser(body, (err) => {
//         if (err) {
//           res.sendStatus(500);
//         } else {
//           res.status(201).send("Signup successful");
//         }
//       });
//     }
//   }
// });

app.post("/login", (req, res, next) => {
  const body = req.body;
  console.log("login body", body);
  var checkusername = null;
  checkIfUsernameExists(body.username, (err, responseData) => {
    if (err) {
      res.sendStatus(500);
    } else {
      var usernameexist = responseData[0];
      for (const [key, value] of Object.entries(usernameexist)) {
        checkusername = `${value}`;
      }
      if (checkusername > 0) {
        controller.sendBackUserID(body.username, (err, data) => {
          checkUserAtLogin(body.username, (err, responseData) => {
            if (err) {
              res.sendStatus(500);
            } else {
              //if user has a hashed pw
              let hashedpw = responseData[0];

              for (const [key, value] of Object.entries(hashedpw)) {
                checkhashedpw = `${value}`;
                console.log("hashed", checkhashedpw);
              }
              const passedinpw = body.password;
              console.log("passes", passedinpw, checkhashedpw);
              bcrypt.compare(passedinpw, checkhashedpw).then((match) => {
                if (!match) {
                  res.sendStatus(500);
                } else {
                  //if username exists and pw correct we also need the userid so we send that back using controller method
                  //we need a userid to create a token, given its repetition this method should be refactored
                  controller.sendBackUserID(body.username, (err, data) => {
                    if (err) {
                      res.status(500);
                    } else {
                      //if id is sent back
                      var iddata = data[0];
                      res.clearCookie("access-token");
                      for (const [key, value] of Object.entries(iddata)) {
                        //extract id value from data object
                        getuserid = `${value}`;
                        console.log(getuserid);
                      }
                      const accessToken = createTokens(getuserid);
                      console.log("cookie", accessToken);
                      res.cookie("access-token", accessToken, {
                        maxAge: 60 * 60 * 24 * 1000,
                      });
                      console.log("logged in", accessToken);
                      res.status(200).send(accessToken);
                    }
                  });
                }
              });
            }
          });
        });
      }
    }
  });
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
