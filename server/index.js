import http from 'node:http';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const page = fs.readFileSync(fileURLToPath(new URL('../index.html', import.meta.url)));

const server = http.createServer((req, res) => {
  const urlPath = (req.url || '').split('?')[0];

  // Redirect API atau asset langsung ke maktab.my.id jika dipanggil langsung
  if (urlPath.startsWith('/api/')) {
    res.writeHead(307, { Location: `https://maktab.my.id${req.url}` });
    return res.end();
  }

  // Tampilkan halaman wrapper iframe
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.end(req.method === 'HEAD' ? undefined : page);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Maktabah iframe wrapper server running on port ${PORT}`);
});
