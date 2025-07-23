// import http from 'http';
const http = require('http');
const url = require('url');

// localhost -> 127.0.0.1 -> loopback -> 서버를 실행한 컴퓨터
const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  console.log(path);

  res.writeHead(200, {'Content-Type': 'text/html;'});
  if (path === '/') return res.end('Hello World');
  if (path === '/about') return res.end('About Page');
  if (path === '/contact') return res.end('Contact Page');

  res.end('<h1>Hello World</h1>');
});

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});




