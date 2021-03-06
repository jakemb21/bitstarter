var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var infile = "index.html";
var buffer = fs.readFileSync(infile);

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buffer.toString("utf-8", 0, buffer.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
