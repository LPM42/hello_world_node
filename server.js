var http = require('http');

console.log("Creating Server");

var server = http.createServer(function(request, response) {
  var body = '<h1>hello from my computer</h1>';
  response.writeHead(200, {
    'Content-Length': body.length,
    'Content-Type': 'text/html'
  });

  response.write(body);
  response.end();
});

server.listen(3000, function() {
  console.log("Server Started");
});