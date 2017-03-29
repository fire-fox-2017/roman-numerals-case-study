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



//JS yang pertama
 /*var roman = new Array();
 roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 var decimal = new Array();
 decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 
 function to_roman(value) {
   if(value<=0 || value>=4000) return value;
   var romanNumeral = '';
   for(var i=0; i<roman.length; i++) {
     while (value >= decimal[i]) {
       value -= decimal[i];
       romanNumeral += roman[i];
     }
   }
   return romanNumeral;
 }*/
 
 //JS yang kedua 55
 /*function to_roman(num) {
   if (typeof num !== 'number')
     return false;
 
   var digits = String(+num).split(''),
   key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
     '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
     '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
     roman_num = '',
     i = 3;
     while (i--) {
       roman_num = (key[+digits.pop() + (i*10)] || '') + roman_num;
       console.log('nilai dalam while ' + i + ': ' + roman_num);
     }
 
     return Array(+digits.join('') + 1).join('M') + roman_num;
 }*/
 

 //JS yang ketiga 
 /*var to_roman = function(num) {
 
   //Create arrays with default conversion with matching indices.
   var decimalValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
   var romanNumeral = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
 
   //Create a copy of num to work on and an empty string variable for the final roman number
   var numCopy = num;
   var romanized = '';
 
   //While the decimal number is greater than 0,
   while(numCopy>0) {
     //Loop through the indices of the decimalValue array.
     for(var index = 0; index<decimalValue.length; index++) {
       //Get the maximum decimal number less or equal then the decimal number.
       if(+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
         //Add the Roman numeral & decrease numCopy by the decimal equivalent.
         romanized += romanNumeral[index];
         numCopy -= decimalValue[index];
       }
     }
   }
 
   return romanized;
 };*/
 
 //JS yang keempat
 /*function to_roman(num) {
   var result = '';
   var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   var roman = ['M', 'MC', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
   for (var i=0; i<=decimal.length; i++) {
     while (num%decimal[i] < num) {
       result += roman[i];
       num -= decimal[i];
     }
   }
   return result;
 } 
 
 console.log('My totally sweet testing script for new roman\n')
 console.log('input | expected | actual')
 console.log('———|—————|———')
 console.log('4     | IV       | ', to_roman(4))
 console.log('9     | IX       | ', to_roman(9))
 console.log('13    | XIII     | ', to_roman(13))
 console.log('1453  | MCDLIII  | ', to_roman(1453))
 console.log('1646  | MDCXLVI  | ', to_roman(1646))*/
