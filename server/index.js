import http from 'node:http';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const page = fs.readFileSync(fileURLToPath(new URL('../index.html', import.meta.url)));
const server = http.createServer((req, res) => {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Retry-After', '3600');
  res.statusCode = 503;
  if ((req.url || '').split('?')[0].startsWith('/api/')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(req.method === 'HEAD' ? undefined : JSON.stringify({ error: 'Layanan sedang diperbarui. Silakan kembali beberapa waktu lagi.', maintenance: true }));
    return;
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(req.method === 'HEAD' ? undefined : page);
});
server.listen(process.env.PORT || 3000, () => console.log('Maintenance page is running.'));
