function signedIntegerToString(num) {
  if (num < 0) {
    num *= -1;
    return '-' + integerToString(num);
  } else if (num > 0) {
    return '+' + integerToString(num);
  } else {
    return integerToString(num);
  }
}

function integerToString(num) {
  let output = [];
  let remainder;
  do {
    [num, remainder] = divMod(num, 10);
    output.push(remainder);
  } while (num !== 0);
  return output.reverse().join('');
}

function divMod(num, divisor) {
  return [Math.floor(num / divisor), num % divisor];
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"

console.log();

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"