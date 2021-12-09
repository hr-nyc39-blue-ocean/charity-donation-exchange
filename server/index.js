const express = require('express');
const app = express();
const PORT = 3001;
const axios = require('axios');
const morgan = require('morgan');
// const db = require('./db/index.js');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));









app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
