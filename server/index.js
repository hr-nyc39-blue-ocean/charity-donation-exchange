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

// GET requests
app.get("/getAllDonations", (req, res) => {
  res.status(200).send("ok");
});
app.get("/dashboardDonations", (req, res) => {
  res.status(200).send("ok");
});

// POST requests
app.post("newUserRegistration", (req, res) => {
  res.status(200).send("ok");
});
app.post("addNewDonation", (req, res) => {
  res.status(200).send("ok");
});

// PUT requests
app.put("claimDonation", (req, res) => {
  res.status(200).send("ok");
});

// DELETE requests
app.delete("deleteDonationListing", (req, res) => {
  res.status(200).send("ok");
});

/*
TODO: how to handle user login and logout?
user login
user logout

*/

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
