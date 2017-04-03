/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
   Solusi dapat dieksekusi, unutk memverifikasi menggunakan console.log
2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
   Pada case 3 terdapat bugs dimana apabila meng convert lebih dari 100. verifikasi dengan console.log
3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
   sintaks baru : typeOf.
4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
   saya dapat memahaminya.
5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
   Belum memahami sintaks baru khususnya untu typeOf, untuk seterusnya jika dibutuhkan pasti akan digunakan.
6. Adakah struktur data baru? Apa saja, tolong sebutkan
   untuk saat inibelum ada
7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
   berbeda - beda tapi tujuan sama. :D.
8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
   case ke 4, bukan berdasarkan solusi, tetapi lebih mudah dimengerti.
9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
   saat ini belum memahami dampak yang terjadi terhadap performa aplikasi. yang saya pahami,
   apabila ukuran memori file besar akan mempengaruhi kecepatan  performa pada aplikasi.
10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
    ???maintenance code dilakukan apabila terdapat kekurangan / kesalahan pada pola / pattern dibuat. 
*/


//Code JavaScript romanNumeral

// Case 1

// var roman = new Array();
// roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
// var decimal = new Array();
// decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// function to_roman(value){
//   if ( value <= 0 || value >= 4000) return value;
//   var romanNumeral = "";
//   for (var i = 0; i < roman.length ; i ++){
//     while (value >= decimal[i]){
//       value -= decimal[i];
//       romanNumeral += roman[i];
//     }
//   }
//   return romanNumeral;
// }
// console.log("My totally sweet testing script\n");
// console.log("Input  | expected  | actual");
// console.log("___|__|__");
// console.log("4      | IV        |", to_roman(4));
// console.log("9      | IX        |", to_roman(9));
// console.log("13     | XIII      |", to_roman(13));
// console.log("1453   | MCDLIII   |", to_roman(1453));
// console.log("1646   | MDCXLVI   |", to_roman(1646));

// Case 2

// function to_roman(num){
//   if ( typeof num !== 'number')
//   return false;
//   var digits = String(+num).split(""),
//   key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X",
//       "XX", "XX", "XL", "L", "LX", "LXX", "LXXX", "LC", "", "I", "II", "III",
//       "IV", "V", "VI", "VII", "VIII", "IX"],
//       roman_num = "";
//       i = 3;
//       while (i--)
//         roman_num = (key[+digits.pop() + (i*10)] || "")+ roman_num;
//         return Array(+digits.join("")+ 1).join("M") + roman_num;
// }
// console.log("My totally sweet testing script\n");
// console.log("Input  | expected  | actual");
// console.log("___|__|__");
// console.log("4      | IV        |", to_roman(4));
// console.log("9      | IX        |", to_roman(9));
// console.log("13     | XIII      |", to_roman(13));
// console.log("1453   | MCDLIII   |", to_roman(1453));
// console.log("1646   | MDCXLVI   |", to_roman(1646));

// Case 3
// var to_roman = function(num) {
//   var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
//   var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
//   var numCopy = num;
//   var romanized = '';
//   while (numCopy > 0) {
//     for (var index = 0; index < decimalValue.length; index++) {
//       if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] >  numCopy) {
//         // console.log(numCopy);
//         romanized += romanNumeral[index];
//         numCopy -= decimalValue[index];
//       // }else{
//       //   console.log("---------");
//       }
//     }
//   }
//   return romanized;
// };
// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// console.log('———|—————|———')
// console.log('4     | IV       | ', to_roman(4))
// console.log('9     | IX       | ', to_roman(9))
// console.log('13    | XIII     | ', to_roman(13))
// console.log('1453  | MCDLIII  | ', to_roman(999))
// console.log('1646  | MDCXLVI  | ', to_roman(1646))


// Case 4
// function to_roman(num) {
//   var result = '';
//   var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   var roman = ["M", "MC", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
//   for (var i = 0; i<=decimal.length; i++) {
//     while (num%decimal[i] < num) {
//       result += roman[i];
//       num -= decimal[i];
//     }
//   }
//   return result;
// }
//
// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// console.log('———|—————|———')
// console.log('4     | IV       | ', to_roman(4))
// console.log('9     | IX       | ', to_roman(9))
// console.log('13    | XIII     | ', to_roman(13))
// console.log('1453  | MCDLIII  | ', to_roman(1453))
// console.log('1646  | MDCXLVI  | ', to_roman(1646))
