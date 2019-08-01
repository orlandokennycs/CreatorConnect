const path = require('path');
const express = require('express');
const app = express();
var http = require('http');
var fs = require('fs');
app.set('view engine', 'pug');
app.set('views');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));

const MongoClient = require('mongodb').MongoClient
    var ObjectID = require('mongodb').ObjectID;
    
    MongoClient.connect('mongodb+srv://USERNAME:PASSWORD@cluster0-q86na.mongodb.net/test?retryWrites=true&w=majority', (err, db) => {
        var dbase = db.db("CreatorConnect");
        if (err) return console.log(err)
        app.listen(3000, () => {})

        app.get('/CreatorConnect', (req, res) => {
          dbase.collection('users').find().count((err, results) => {
            dbase.collection('users').find({}, { projection: {_id:0, name:1, email:1, skills:1}}).toArray( (err, allUsers) => {
              res.render('prototype', {users: allUsers, totalUsers: results})
            });
          });
        });
      })
