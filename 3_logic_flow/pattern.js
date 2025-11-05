function generatePattern(nStars) {
  // use `i` to count up rows
  // use `j` to count up columns for each row i.e. character-by-character
  // if `j` <= `i`, character is `j`, otherwise character is '*'
  // log string concatenation of characters for each row

  // Further exploration: repeat '*' but number of digits of `j`
  
  let rowString;
  for (let i = 1; i <= nStars; i++) {
    rowString = '';
    for (let j = 1; j <= nStars; j++) {
      if (j <= i) {
        rowString += String(j);
      } else {
        rowString += '*'.repeat(String(j).length);
      }
    }
    console.log(rowString);
  }
}

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

console.log();
generatePattern(20);