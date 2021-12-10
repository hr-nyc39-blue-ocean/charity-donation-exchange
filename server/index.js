const express = require("express");
const app = express();
const PORT = 3000;
const axios = require('axios');
const morgan = require('morgan');
const db = require('./db/index.js');
const controller = require('./db/controller.js');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.post('/listings/', (req, res) => {
  const body = req.body;
  console.log('req.body >>>>', body);
  controller.postListing(body, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  })
});
// get all donations
app.get("/v1/donations", (req, res) => {
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

// get user donations
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
  res.status(201).send("created");
});

// update specific donation
app.put("/v1/donations/:donationId", (req, res) => {
  /*
    // check for valid input?
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }

  */
  res.status(200).send("updated");
});

// DELETE requests
app.delete("/v1/donations/:donationId", (req, res) => {
  console.log('req.params >>>>', req.params);
  controller.deleteListing(req.params.donationId, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send("deleted");
    }
  })
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
