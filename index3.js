var fs = require('fs');
var buffer = require('buffer');
var path = require('path');

var http = require('http');

var server = http.createServer();
var image =

server.on('request', function(request, response) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  if (request.method === 'GET' && request.url === '/index3') {
    fs.readFile('./index.html', 'utf-8', function(err, data) {
    response.write(data);
    response.write("zalaczylo sie");
    response.end();
    })
  } else {
    response.statusCode = 404;
    fs.readFile('./firstframe.jpg', function(err, data) {
    // fs.readFile('./error404.gif', function(err, data) {
      response.write(data);
      response.write('nie udalo sie-zła ściezka');
      response.end();
    })
  }
});

server.listen(8080);
