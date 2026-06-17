const http = require('http');

const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || '1.0.0';
const GREETING = process.env.GREETING || 'Hello from the DevOps Challenge!';

// Estado em memória apenas para simular um recurso simples
const items = [];

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Health check: liveness
  if (method === 'GET' && url === '/healthz') {
    return send(res, 200, { status: 'ok' });
  }

  // Health check: readiness
  if (method === 'GET' && url === '/readyz') {
    return send(res, 200, { status: 'ready' });
  }

  // Root
  if (method === 'GET' && url === '/') {
    return send(res, 200, { message: GREETING, version: APP_VERSION });
  }

  // Listar itens
  if (method === 'GET' && url === '/items') {
    return send(res, 200, { items });
  }

  // Criar item
  if (method === 'POST' && url === '/items') {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
      try {
        const parsed = JSON.parse(data || '{}');
        if (!parsed.name) {
          return send(res, 400, { error: 'field "name" is required' });
        }
        const item = { id: items.length + 1, name: parsed.name };
        items.push(item);
        return send(res, 201, item);
      } catch (e) {
        return send(res, 400, { error: 'invalid JSON' });
      }
    });
    return;
  }

  return send(res, 404, { error: 'not found' });
});

server.listen(PORT, () => {
  console.log(JSON.stringify({
    level: 'info',
    msg: 'server started',
    port: PORT,
    version: APP_VERSION,
  }));
});

module.exports = server;
