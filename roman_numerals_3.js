var to_roman = function(num){

  var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  var numCopy = num;
  var romanized = '';

  while (numCopy > 0) {
    for (var index = 0; index < decimalValue.length; index++) {
      /*
      the original code doesn't include the "else if", however it leads to infinite loop
      when the num >= 1000, hence added.
      */
      if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
        romanized += romanNumeral[index];
        numCopy -= decimalValue[index];
      } else if (+decimalValue[index] <= numCopy && index === decimalValue.length-1) {
        romanized += romanNumeral[index];
        numCopy -= decimalValue[index];
      }
    }
  }
  return romanized;
}

console.log("input | expected | actual");
console.log("------|----------|----");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
