/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
Ya. Semua contoh kode bisa dieksekusi dengan baik. Hasil yang muncul pun sesuai dengan yang diharapkan.
Untuk memverifikasinya, saya menjalankan contoh kode di terminal node atau jsbin.

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
File yang ketiga ketika memproses angka 1000 akan masuk ke infinite loop. File yang lain berfungsi sesuai yang diharapkan.
Saya memverifikasinya dengan menjalankan test case satu persatu. Bisa juga menggunakan console.log atau debugger.

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
Ada sintaks baru yang belum diketahui seperti key[+digits.pop()].
Ada juga expression var romans = new Array() yang sebenarnya tidak usah digunakan, cukup var romans = [] saja.

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
Ada beberapa baris kode yang saya agak kesulitan untuk mengertinya sebelum saya mencoba test casenya satu per satu.
Seperti kode nomor dua dan tiga.

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
Ada. Seperti sintaks if (typeof num !== 'number'). Saya jadi tahu kalau itu bisa digunakan untuk mengecek jika tipe data bukan int atau 'number'.

6. Adakah struktur data baru? Apa saja, tolong sebutkan
Ada struktur data queue yang menggunakan sintaks key[+digits.pop().

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
Saya bisa belajar bermacam perspektif penulisan kode yang punya hasil sama walau jalan penyelesaiannya berbeda.
Penulisan kode yang berbeda ini menurut saya berpengaruh kepada readibilitas atau readibility sebuah kode. Ada kode yang butuh waktu lama untuk bisa dimengerti seperti nomor 2 dan 3.
Sementara kode nomor 1 dan 4 relatif lebih mudah dipahami dan dibaca karena menggunakan method yang simpel dan jelas, dengan hasil/output yang serupa.

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
Saya memilih solusi keempat, karena mudah dibaca dan dimengerti. Selain itu, penulisannya juga singkat sehingga menurut saya lebih baik dibanding yang lain.

9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
Semakin sedikit fungsi atau baris kode yang ditulis, maka compiler JS akan membutuhkan sedikit memori. Pada akhirnya, performa aplikasi akan lebih cepat.

10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
Semakin efektif/minimal pattern sebuah kode, maka maintenance code akan semakin mudah. Karena orang akan lebih gampang membacanya. Pada akhirnya, akan lebih mudah merefaktor atau menemukan bugs.
*/
