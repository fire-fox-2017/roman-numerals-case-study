/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
Solusi 3 tidak dapat di eksekusi, dieksekusi menggunakan node.js.
2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
Solusi 3 mengandung bug yaitu infinite looping begitu masuk ke satauan ribuan,
karena +decimalValue[+index + 1] ketika index = decimalValue.length tidak ada.
Diverifikasi menggunakan debugger di node.js.
3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
Tidak.
4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
Bisa.
5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
Tidak.
6. Adakah struktur data baru? Apa saja, tolong sebutkan
Tidak.
7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
Kebanyakan polanya sama, yaitu mengurangkan angka dari input sambil menambahkan karakter romawi ke string hasil.
8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
Solusi 4, karena paling effisien dan efektif.
9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
Pola tersebut membuat performa aplikasi menjadi cepat. Bisa menggunakan console.time.
10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
Maintenance code bisa jadi lebih sesuai dengan keinginan user dan lebih mudah dikoreksi. Karena polanya mudah dimengerti.
*/
