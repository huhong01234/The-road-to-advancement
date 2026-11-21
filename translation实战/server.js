// 本地服务：托管静态页面 + 把 /api/chat 转发给本机的 Ollama
// 这样浏览器只和本服务通信，Ollama 的 11434 端口不用暴露到公网

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = Number(process.env.PORT || 8080);
const OLLAMA_URL = 'http://127.0.0.1:11434/api/chat';
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const relPath = urlPath === '/' ? 'index.html' : urlPath.slice(1);
  const filePath = path.resolve(ROOT, relPath);

  // 防止 ../ 穿越到项目目录之外
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403).end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('404 Not Found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    }).end(data);
  });
}

async function proxyChat(req, res) {
  let raw = '';
  for await (const chunk of req) raw += chunk;

  try {
    const upstream = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: raw,
    });
    const text = await upstream.text();
    res.writeHead(upstream.status, {
      'Content-Type': 'application/json; charset=utf-8',
    }).end(text);
  } catch (err) {
    res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' })
      .end(JSON.stringify({ error: `Ollama 连接失败: ${err.message}` }));
  }
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/chat') {
    proxyChat(req, res);
    return;
  }
  if (req.method === 'GET' || req.method === 'HEAD') {
    serveStatic(req, res);
    return;
  }
  res.writeHead(405).end('Method Not Allowed');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`本地页面: http://127.0.0.1:${PORT}`);
});
