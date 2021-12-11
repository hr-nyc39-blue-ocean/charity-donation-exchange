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
// const db = require('./db/index.js');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

// get all donations
app.get("/v1/donations/:charityOnly", (req, res) => {
  /*
    // check for valid input?
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }

  */
  res.status(200).send({});
});

// get user donation listings for dashboard
app.get("/v1/donations/:userId", (req, res) => {
  /*
    // check for valid input?
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }

  */
  res.status(200).send("ok");
});

// add new donation
app.post("/v1/donations", (req, res) => {
  /*
    // check for valid input?
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }

  */
  // console.log(req.body)
  res.status(201).send("created");
});

// update specific donation
app.put("/v1/donations/:listingId", (req, res) => {
  /*
    // check for valid input?
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }

  */
  console.log(req.body)
  res.status(200).send("updated");
});

// delete donation listing
app.delete("/v1/donations/:listingId", (req, res) => {
  /*
    // check for valid input?
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }

  */
  res.status(200).send("deleted");
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


*/

/* TODO: how to handle user login and logout?

  user login
  user logout
  app.post("/v1/registration", (req, res) => {
    res.status(200).send("ok");
  });

*/

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
