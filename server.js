//modeules =================================

var express         = require('express')
var app             = express()
var mongoose        = require('mongoose')
// var http            = require('http').Server(app);
var hbs             = require('express-handlebars');

//configuration =============================

app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname:           ".hbs",
  partialsDir:       "views/",
  layoutsDir:        "views/",
  defaultLayout:     "game"
}));

app.use('pubstuff', express.static(__dirname + '/public'))


app.get('/', function(req, res){
  res.render('game', {layout: false});
});

app.listen(3000, function(){
  console.log('listening on *:3000');
});
