var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var http = require('http').Server(app);

var app = express()
app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))

app.listen(3000, function(){
  console.log('listening on *:3000');
});

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});
