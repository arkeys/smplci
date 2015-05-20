var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to the memo!\n');
}).listen(80);
console.log('Server running on port 80');
