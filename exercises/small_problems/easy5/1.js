function repeater(str) {
  let output = '';
  for (let char of str) {
    output += char + char;
  }
  return output;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""