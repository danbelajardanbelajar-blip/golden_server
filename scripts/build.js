import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
fs.mkdirSync(root + 'dist', { recursive: true });

for (const name of ['index.dev.html', 'dist/index.html', 'dist/index.dev.html']) {
  fs.copyFileSync(root + 'index.html', root + name);
}

console.log('Iframe wrapper entry points generated successfully.');
