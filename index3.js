var fs = require('fs');
var http = require('http');
var server = http.createServer();


server.on('request', function(request, response) {
  if (request.method === 'GET' && request.url === '/index3') {
    // line 13 -use it only if you enter the index3
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    fs.readFile('./index.html', 'utf-8', function(err, data) {
    response.write(data);
    response.write('here is your page');
    response.end();
    })
  } else {
    response.statusCode = 404;
    // line 22--> open picture & line 23-->open .gif
    // fs.readFile('./firstframe.jpg', function(err, data) {
    fs.readFile('./error404.gif', function(err, data) {
      response.write(data);
      response.write('bad path');
      response.end();
    })
  }
});

server.listen(8080);
