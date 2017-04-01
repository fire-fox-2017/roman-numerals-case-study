/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
ya, semua bisa dieksekusi dan mendapatkan keluaran yang sesuai dengan yang diinginkan, kecuali yang no 3
1000 tidak muncul
saya mem-verifikasinya dengan cara menjalankannya di js bin dan nodeJs
2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
ternyata setelah saya coba lihat di file ke 3, terdapat masalah loop saat menghitung 1000,
terbukti saat tampilkan 1000 di nodeJS ia berhenti proses, seakan2
saya baru menganalisisnya di js bin dan debugger nodeJS infinite loop
3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
ada, yaitu roman_num = (key[+digits.pop() + (i*10)] || '') + roman_num; dan (typeof num !== 'Number')
4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
ya, saya mengerti alur algoritmanya cukup baik terkecuali untuk sintaks baru tersebut
5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
bisa, seperti algoritma typeof
6. Adakah struktur data baru? Apa saja, tolong sebutkan
ada String(+num) dan key[+digits.pop() + (i*10)]
7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
ya, dari segi algoritmanya berbeda walau hasil output hampir sama, ini dikarenakan adanya perbedaan pola pikir kita dalam menuangkan
algoritma ke dalam sintax. berbeda dengan Pseudocode yang bersifat universal jika sintax digunakan untuk pemahaman algoritma
dinilai oleh saya cukup sulit
8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
solusi no 1 dan 4
9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
ini terkait dengan efisiensi memory semakin ringkas semakin rendah dalam memmakan source memori
10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
semakin rendah pemola-an dan pattern pada code akan semakin meringankan kinerja processor dan juga akan lebih efisiensi terhadap
source memory di komputer kita.
*/

//roman pertama
/*var roman = new Array();// mendeklare roman sebagai array
 roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 //mengisi roman dengan huruf romawi
 var decimal = new Array();//mendeclare decimal sebagai array
 decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//mengisi decimal dengan angka yang cocok dengan roman di atas, yg bersifat dasar dari romawi
 function to_roman(value) {
   if(value<=0 || value>=4000) return value; //menyatakan jika lebih dari 4000 maka akan di return
   //angka yang diberi
   var romanNumeral = '';
   //memberi variable string untuk menampung huruf romawi
   for(var i=0; i<roman.length; i++) {
     while (value >= decimal[i]) {
       //jika value lebih besar dari decimal index ke-i
       value -= decimal[i];//maka value dikurang nilai
       romanNumeral += roman[i];//dan roman[i] akan di masukkan ke romanNumeral
     }
   }
   return romanNumeral;
 }
*/
//roman kedua
/*function to_roman(num) {
   if (typeof num !== 'number')
   //mengecek apakah 'num' itu nomor atau bukan
     return false;//jika ya beri nilai false
//membuat variable yang menjadikan 'num' sebagai String dan mejadi array
//lalu membuat angka romawinya
//dan membuat variable String (roman_num) untuk menampilkan huruf nya
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
 }
*/
//roman ke tiga
var to_roman = function(num) {

   //membuat array yang sama dengan roman numeral
   var decimalValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
   var romanNumeral = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];

   //menyalin duplikat variable num
   var numCopy = num;
   var romanized = '';

   //loop ketika num > 0
   while(numCopy>0) {
     for(var index = 0; index<decimalValue.length; index++) {
       if(+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
         romanized += romanNumeral[index];
         numCopy -= decimalValue[index];
       }
     }
   }

   return romanized;
 };

//roman ke empat
/*var to_roman = function(num) {


   var decimalValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
   var romanNumeral = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];


   var numCopy = num;
   var romanized = '';


   while(numCopy>0) {

     for(var index = 0; index<decimalValue.length; index++) {

       if(+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
        
         romanized += romanNumeral[index];
         numCopy -= decimalValue[index];
       }
     }
   }

   return romanized;
 };
*/

 console.log('My totally sweet testing script for new roman\n')
 console.log('input | expected | actual')
 console.log('———|—————|———')
 console.log('4     | IV       | ', to_roman(4))
 console.log('9     | IX       | ', to_roman(9))
 console.log('13    | XIII     | ', to_roman(13))
 console.log('1453  | MCDLIII  | ', to_roman(1453))
 console.log('1646  | MDCXLVI  | ', to_roman(1646))
