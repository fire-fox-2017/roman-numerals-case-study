function to_roman(num) {
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  for (var i = 0; i < decimal.length; i++) {
    // console.log(`num: ${num}`);
    // console.log(`decimal[${i}]: ${decimal[i]}`);
    while (num%decimal[i] < num) {
      // console.log(`num % decimal[${i}]: ${num%decimal[i]} < num: ${num}`);
      result += roman[i];
      // console.log(`result: ${result}`);
      num -= decimal[i];
    }
  }
  return result;
}

console.log("input | expected | actual");
console.log("------|----------|----");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
