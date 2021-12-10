const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const morgan = require('morgan');
const db = require('./db/index.js');
const controller = require('./db/controller.js');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

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








app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
