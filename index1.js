var http = require('http');

var server = http.createServer();
// listening function
server.on('request', function(request, response) {
  // we always set the header before sending the body of the answer!
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  if (request.method === 'GET' && request.url === '/hello') {
    response.write('<h1>Hello World!</h1>');
    response.end();

  } else {
    response.statusCode = 404;
    response.write('<h1> 404:Zła ściezka!</h1>');
    response.end();
  }
});

server.listen(8080);
