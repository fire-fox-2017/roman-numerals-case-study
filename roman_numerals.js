/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
Semua Solusi bisa dieksekusi, di verifikasi dengan *console.log()* berbagai case.
2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
Awalnya bugs sering muncul dan harus dicoba dengan trial and error.
3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
sintaks yang saya belum ketahui masih banyak, semakin lama operator baru dan expression dan method Semakin bertambah.
4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
Code yang diupload sudah dipahami, ada beberapa tugas yang saya masih harus pelajari.
5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
recursive metode baru yang bisa saya pakai di tugas numberToWords.
6. Adakah struktur data baru? Apa saja, tolong sebutkan
struktur data yang baru yang saya pelajari berupa object, Array, nestedArray.
7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
Iya berbagai perspektif mempunyai cara yang berbeda-beda tapi dengan tujuan dan logika yang relatif sama, kendala yang diperoleh
oleh pemula seperti saya adalah menulis code dengan sintaks yang benar dan logika yang dapat dimengerti oleh JavaScript.
8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
Solusi terbaik adalah solusi yang memberikan konsistensi pada keluaran dengan data dinamis yang dimasukan sesuai dengan keluan yang
ditentukan. rekursi adalah cara yang baik karena data dinamis dapat dihandle dengan perulangan fungsi itu sendiri sehingga
proses dapat dilakukan di dalam function.
9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
Karena dilakukan di function maka code lebih rapi dan dapat dibaca dengan baik,
untuk aplikasi sendiri keluaran konsisten sementara keluaran meerupakan tolak ukur saya untuk melihat performa aplikasi.
10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
pola atau pattern terhadap maintenance code mempermudah dalam tracking apabila ada abnormal pada aplikasi.

*/

//Code JavaScript romanNumeral

/*function to_roman_old(num) {
    // your implementation code here
    var romanMatrix = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [5, 'V'],
        [1, 'I']
    ];
    if (num === 0) {
        return '';
    }
    for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + to_roman_old(num - romanMatrix[i][0]);
        }
    }
}


function to_roman(num) {
    // your implementation code here
    var romanMatrix = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    if (num === 0) {
        return '';
    }
    for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + to_roman(num - romanMatrix[i][0]);
        }
    }
}

// Drive code
console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IIII     | ', to_roman_old(4))
console.log('9     | VIIII    | ', to_roman_old(9))
console.log('13    | XIII     | ', to_roman_old(13))
console.log('55    | LV       | ', to_roman_old(55))
console.log('1453  | MCDLIII  | ', to_roman_old(1453))
console.log('1646  | MDCXLVI  | ', to_roman_old(1646))


console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))


module.exports = {
    to_roman_old,
    to_roman
}
*\
