var express = require('express');
var path = require('path');

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Zet map public in frontend
app.use(express.static('public'));

app.get('/', function(req, res){
  var portfolio = require('./data/svenmaes.json');
  res.render('home', {
    data: portfolio
  });
});

app.get('/rupert', function(req, res){
  var portfolio = require('./data/rupert.json');
  res.render('home', {
    data: portfolio
  });
});

app.listen(3000);
