/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?

Semua solusi bisa dieksekusi. Cara verifikasinya adalah dengan menggunakan node js untuk melihat
hasil eksekusi. Akan tetapi solusi nomor 2 dan 3 hasil output tidak sesuai

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?

Terdapat solusi yang mengandung bugs, di roman_numerals3.js. Bug-nya adalah pada numCopy >= 1000.
Ketika dilakukan pengecekan kondisi '+decimalValue[index] <= numCopy && +decimalValue[index+1] > numCopy',
nilai index menjad index ke 11, yaitu nilai [900].

Pengecekan kondisi akan menjadi if (900 <= 1000 && 1000 > 1000). Karena 1000 > 1000 bernilai false,
maka akan keluar dari pengecekan kondisi dan nilai numCopy akan tetap. Setelah perulangan for selesai,
maka akan kembalik ke perulangan while. Karena numCopy nilainya > 0, maka akan masuk perulangan for
dan dilakukan pengecekan kondisi lagi sehingga menghasilkan infinite loop.

Di solusi 2 juga tidak sesuai hasilnya.

Cara verifikasinya adalah dengan membandingkan hasil di terminal dengan hasil yang diharapkan.

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?

Terdapat sintaks baru yang belum diketahui, yaitu penggunaan typeof, serta penggunan + pada pemanggilan indeks
array. Terdapat operator baru dalam var roman_num di roman_numerals2.js

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?

Tidak semua, khususnya pada roman_numerals2.js mengalami kesulitan dalam memahami code.

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?

Saya masih belum paham penggunaan + sebelum variabel array dipanggil.

6. Adakah struktur data baru? Apa saja, tolong sebutkan

Tidak ada struktur data baru. Terdapat struktur data array

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.

Terdapat berbagai cara dalam menyelesaikan suatu permasalahan. Namun tiap solusi berbeda dalam tingkat
efektivitas dan efisiensi. Terdapat perbedaaan dalam tiap2 solusi.

Jika tidak dilakukan perulangan

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.

Solusi terbaik adalah roman_numerals4.js, karena variabelnya dideklarasikan menjadi local variable sehingga penggunaan memori lebih kecil daripada global variabel.
Selain itu, code mudah dipahami.

9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?

Dampaknya adalah terutama dalam performa aplikasi menampilkan hasil serte memory. Cara mengukur dampaknya adalah dengan
menggunakan benchmark performa pada suatu aplikasi. Lalu dicari aplikasi dengan pattern yang paling cepat menyelesaikan
fungsi pada aplikasi.

10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
Terdapat dampak dari pola dalam maintenance code, karena dengan pola yang baik jika terdapat perubahan
maka dapat dilakukan perubahan pada code. Jika pola-nya tidak baik, maka code harus diubah banyak agar
sesuai dengan perubahan.
*/
