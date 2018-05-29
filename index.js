// HTTP server initialization
var http = require('http');

var server = http.createServer(function (reqest,response) {
});
// line 4 is the same like line 7 & 8
// create server
var server = http.createServer();
// add listening .on ()
server.on('request', function (request, response) {
    response.write('Hello world!');
    response.write('<body>');
    response.write('</body>');
    response.end();
    response.write('<h1>This is awesome!</h1>');
});
// add listening that the server runs in a continuous mode
// 9000 is the port on which to listen
server.listen(9000);
