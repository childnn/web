
// 控制台执行: http-server.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


// Whenever a new request is received, the request event is called,
// providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).
// Those 2 objects are essential to handle the HTTP call.
// The first provides the request details. In this simple example,
// this is not used, but you could access the request headers and request data.
// The second is used to return data to the caller.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
