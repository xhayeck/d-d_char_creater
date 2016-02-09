//create a server on heroku using express


var express = require('express');
var app = express();
var path = require("path");

//app.set('port', (process.env.PORT || 1337));

app.use(express.static(__dirname + '/../char_sheet'));

// app.set('views', __dirname)
// app.set('view engine', 'html');

app.get('/', function(request,response) {
  response.sendFile(path.join(__dirname + '/../char_sheet.html'));
});

app.listen(1337, function() {
  console.log('Node add is running on port ');
});