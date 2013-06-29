var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

/*
var file = fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  var buf = new Buffer(data, 'utf8');
  console.log(buf.toString());
});
*/

app.get('/', function(request, response) {
  fs.read('index.html', function (err, data) {                                                             
    if (err) throw err;                                                                                                    var buf = new Buffer(data, 'utf8');
    response.send(buf.toString());
    //response.send('Hello World 2!');
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
