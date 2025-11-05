function substr(string, start, length) {
  // Guard clauses:
  // - If start is negative, count backwards from end of string
  // - If length is negative or 0, return empty string ''. Don't need to explicitly build this because if length is negative or 0, end will be smaller than start and for loop never executes.
  // - If length takes us beyond end of string, just return to end of string

  let output = '';

  if (start < 0) {
    start += string.length;
  }

  let end = Math.min(string.length - 1, start + length - 1);

  for (let i = start; i <= end; i++) {
    output += string[i];
  }

  return output;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""