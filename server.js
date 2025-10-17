const http = require('node:http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(JSON.stringify({ ppob: false }));
});

server.listen(PORT, () => {
  console.log(`PPOB test API listening on http://localhost:${PORT}`);
});
