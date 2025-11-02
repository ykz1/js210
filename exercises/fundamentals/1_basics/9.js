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