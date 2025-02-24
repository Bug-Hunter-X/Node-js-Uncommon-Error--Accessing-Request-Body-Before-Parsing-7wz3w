const http = require('http');

const server = http.createServer((req, res) => {
  // Uncommon error: Attempting to access request body before parsing
  console.log(req.body); // req.body is undefined at this point

  // Correct approach:
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    try {
      req.body = JSON.parse(body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Success' }));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON' }));
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});