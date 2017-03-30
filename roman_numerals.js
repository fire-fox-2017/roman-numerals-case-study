/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
Tidak, dengan menjalankan di node js di terminal secara langsung.

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
Ada, solusi 3, dengan cara dijalankan di nodejs.

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
Sintaks Pop.
If (+decimalValue[index] <= numCopy && +decimalValue.length; index++) pada bagian +decimalValue untuk fungsi dari operator + di fungsi tersebut.

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
Untuk roman_numerals_3.js masih belum memahami baris +decimalValue

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
Iya, untuk melakukan iterasi dan pengurangan secara bertahap menggunakan array yang diiterasi dan dua array dengan index yang sama.

6. Adakah struktur data baru? Apa saja, tolong sebutkan
Tidak ada, sejauh yang saya temukan, struktur data yang digunakan adalah array, number, string.

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
Tidak benar - benar berbeda, perbedaan hanya pada cara memasukkan angka romawi pada string yang disediakan.

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
Solusi no 4, karena bisa berjalan tanpa infinity-loop dan mengeluarkan output yang diharapkan, serta paling mudah dipahami secara alur logika.

9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
Untuk pola loop yang digunakan pada solusi 3 berdampak terhadap event infinity-loop. Infintiy loop pada kasus tertentu, bila compiler atau OS tidak menyediakan sistem untuk meng-antispasi infinity-loop atau fork-bomb maka proses tersebut akan memenuhi seluruh alokasi memori yang ada dan membuat proses lain tidak mendapatkan resources yang cukup sehingga mengakibatkan sistem hang . Bila terjadi di server maka bisa mengakibatkan kerugian akibat konsumen tidak bisa mengakses service yang disediakan.

10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
Semakin banyak operasi yang dilibatkan dan semakin banyak parameter yang dibutuhkan untuk validasi dalam menjalankan proses maka akan semakin rumit untuk melakukan maintenance code dan semakin sulit melakukan scaling dengan banyaknya parameter yang membatasi suatu fungsi. 
*/
