const http = require('http');
const assert = require('assert');

// Garante que o servidor use uma porta de teste isolada
process.env.PORT = process.env.PORT || 3999;
const server = require('./server');

const BASE = `http://127.0.0.1:${process.env.PORT}`;

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const req = http.request(
      `${BASE}${path}`,
      {
        method,
        headers: data
          ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
          : {},
      },
      (res) => {
        let raw = '';
        res.on('data', (c) => (raw += c));
        res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(raw || '{}') }));
      }
    );
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

async function run() {
  let passed = 0;

  // /healthz
  let r = await request('GET', '/healthz');
  assert.strictEqual(r.status, 200);
  assert.strictEqual(r.body.status, 'ok');
  passed++;

  // /readyz
  r = await request('GET', '/readyz');
  assert.strictEqual(r.status, 200);
  passed++;

  // /
  r = await request('GET', '/');
  assert.strictEqual(r.status, 200);
  assert.ok(r.body.version);
  passed++;

  // POST /items sem name
  r = await request('POST', '/items', {});
  assert.strictEqual(r.status, 400);
  passed++;

  // POST /items válido
  r = await request('POST', '/items', { name: 'teste' });
  assert.strictEqual(r.status, 201);
  assert.strictEqual(r.body.name, 'teste');
  passed++;

  // GET /items
  r = await request('GET', '/items');
  assert.strictEqual(r.status, 200);
  assert.strictEqual(r.body.items.length, 1);
  passed++;

  console.log(`✅ ${passed} testes passaram`);
  server.close();
}

run().catch((err) => {
  console.error('❌ teste falhou:', err.message);
  server.close();
  process.exit(1);
});
