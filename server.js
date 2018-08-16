const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
// const db = require('./config/db')
const Route = require('./app/routes');

const app = express();
const port = 8000;

Route(app, {})
app.listen(port, _ => {
  console.log('We are live on ' + port);
})
