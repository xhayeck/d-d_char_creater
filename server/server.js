//create a server on heroku using express


var express = require('express');
var app = express();
// var path = require("path");

//app.set('port', (process.env.PORT || 1337));

app.use(express.static(__dirname + '/../Public'));
app.use(express.static(__dirname + '/../node_modules'));




// app.set('views', __dirname)
// app.set('view engine', 'html');



// app.get('/', function(request,response) {
//   response.sendFile(path.join(__dirname + '/../Public/char_sheet.html'));
// });

app.listen(1337, function() {
  console.log('Huzzah! Connected!');
});