# books.quizb.my.id — maintenance

Halaman pemberitahuan sementara bahwa perpustakaan sedang diperbarui. Pengembangan aplikasi berlanjut di https://github.com/danbelajardanbelajar-blip/maktabah.my.id.

## Menjalankan

`npm start` atau entry point Passenger/cPanel `app.cjs`. Tidak ada dependensi tambahan atau database yang diperlukan. Server Node merespons halaman dan rute lama dengan HTTP 503, Retry-After, serta header pencegah cache. Rute API mengembalikan JSON maintenance dengan status 503.

`npm run build` di komputer lokal menghasilkan salinan statis di `index.dev.html`, `dist/index.html`, dan `dist/index.dev.html`. Untuk hosting statis, gunakan `index.html`; status HTTP pada hosting statis mengikuti konfigurasi hosting.

## Memperbarui hosting lama

Setelah commit diambil oleh checkout hosting melalui `git pull --ff-only`, restart aplikasi Node melalui panel hosting. Tidak perlu instalasi paket atau build di hosting. Untuk hosting statis, arahkan document root ke folder yang memuat `index.html`.

Push GitHub memperbarui repository. Website aktif baru berubah setelah mekanisme deployment hosting mengambil commit tersebut. Tidak ada kredensial, database, atau pengaturan `.htaccess` hosting yang disertakan.
