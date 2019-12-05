// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("<h1>Hello, this is just an simple NodeJS APP from Chris... </h1>\n");
});

server.listen(80);
console.log("Server listening on port 80 :  http://3.80.251.208:80/");
