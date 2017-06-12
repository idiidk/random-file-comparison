var express = require('express');
var request = require('request');
var app = express();

app.use(express.static('public'));


app.listen(3000, function() {
  console.log("[*] Started server on port 3000.");
});
