/*
Please answer the questions below :
1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
    > bisa di eksekusi hanya tidak dapat menghasilkan yang dinginkan
2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
    > ada bugs di solution no 2
3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
    > ada +divariable(itu hanya ngasih tau num angka)
4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
    > Agak susah memahami di solution ke 2
5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
    > Perlu dicoba dan akan digunakan jika itu memudahkan bagi saya
6. Adakah struktur data baru? Apa saja, tolong sebutkan
  > Multi list, Array sebagai argumen fungsiigg
7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
    >Solusi no 4, karena lebih mudah dimengerti orang lain
9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
    > jika melihat dari semua solusi, jika terdapat banyak looping / mungkin looping infinite, akan mempengaruhi perforamanya
10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
    > Apabila kode yang kita buat dapat mudah dimengerti orang lain, akan mudah untuk maintenancenya
*/


function to_roman(num){
  if (typeof num !== 'number')
  return false;

  var digits = String(+num).split("")
  key=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
  "","I","II","III","IV","V","VI","VII","VIII","IX"],
  roman_num = "",
  i=3;
  while(i--){
    // console.log(i);
      roman_num = (key[+digits.pop()+(i*10)]||"")+roman_num;
      // console.log(roman_num);
      console.log(Array(1));
      return Array(+digits.join("")+1).join("M")+roman_num;
  }

}
console.log("13     | XIII   |", to_roman(13));
