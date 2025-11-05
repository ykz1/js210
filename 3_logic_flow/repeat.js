function repeat(string, times) {
  // Guard clauses:
  // - if 0, return empty string ""; though can capture this with standard operation
  // - if not positive integer, return undefined

  if (!Number.isInteger(times) || times < 0) {
    return undefined
  }

  let output = '';
  for (let i = 0; i < times; i++) {
    output += string;
  }
  return output;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined