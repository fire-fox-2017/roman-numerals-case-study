/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
Semua bisa dieksekusi, ketika di-run tidak ada error yang di-return oleh nodejs.

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
Ada, solusi 2 dan 3.
Solusi 2 menghasilkan output yang salah, akibat ada double "XL" di dalam variable "key".
Solusi 3 menghasilkan infinite loop, akibat syarat statement if tidak dapat menangkap ketika input >= 1000.
Caranya adalah dengan membandingkan output dengan hasil yang diharapkan.

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
Ya. Operator + di depan variable, dan operator || saat assign variable.

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
Tidak sepenuhnya.

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
Mungkin saja dapat digunakan jika memang sesuai kebutuhan.

6. Adakah struktur data baru? Apa saja, tolong sebutkan
Tidak ada.

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
Yang dapat dipelajari adalah adanya berbagai pendekatan yang berbeda dalam menghasilkan solusi untuk permasalahan yang sama.

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
Solusi 1, karena sederhana dan mudah dimengerti.

9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
Ya, semakin banyak operasi yang dilakukan maka akan semakin memakan waktu,
oleh karena itu waktu dapat digunakan utk melihat performa dari suatu solusi.

10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
Code yang sulit dipahami akan membuat sulit juga jika ingin dikembangkan atau diperbaiki.
*/
