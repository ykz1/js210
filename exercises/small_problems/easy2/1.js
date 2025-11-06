let crunch = str => str.replace(/(.)\1+/g, "$1");

function crunch2(str) {
  let output = '';
  let lastChar = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== lastChar) {
      output += str[i];
      lastChar = str[i];
    }
  }
  return output;
}

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === "g");
console.log(crunch('a') === "a");
console.log(crunch('') === "");

console.log();

console.log(crunch2('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch2('4444abcabccba') === "4abcabcba");
console.log(crunch2('ggggggggggggggg') === "g");
console.log(crunch2('a') === "a");
console.log(crunch2('') === "");