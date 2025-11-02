const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
}

function stringToSignedInteger(string) {
  let multiplier = 1;
  if (string[0] === '+' || string[0] === '-') {
    if (string[0] === '-') {multiplier = -1};
    string = string.slice(1)
  }

  let output = 0;
  for (let i = 0; i < string.length; i++) {
    let power = string.length - i - 1;
    output += DIGITS[string[i]] * 10**power;
  }

  return output * multiplier;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100