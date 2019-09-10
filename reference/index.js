// index.js
// (c) 2019 FSUInnovationHub

// Import Consants
const path = require('path');
const express = require('express');
const app = express();
const config = require("./config.json")

// Express Configuration
app.set('view engine', 'pug');
app.set('views');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));

// MongoDB Variables
const MongoClient = require('mongodb').MongoClient

// Main Connect
MongoClient.connect(config.uri, (err, db) => {
 if (err) return console.log(err)
 var dbase = db.db("CreatorConnect");

  app.get('/CreatorConnect', (req, res) => {
    dbase.collection('users').find().count((err, results) => {
      dbase.collection('users').find({}, { projection: {_id:0, name:1, email:1, skills:1}}).toArray( (err, allUsers) => {
        res.render('prototype', {users: allUsers, totalUsers: results})
      });
    });
  });

  app.listen(3000, () => {
    console.log("Server Started on Port")
  });
});
