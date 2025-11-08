function repeatedCharacters(str) {
  str = str.toLowerCase();
  let output = {};
  for (let i = 0; i< str.length; i++) {
    const char = str[i]
    char in output ? output[char]++ : output[char] = 1;
  }
  for (let char in output) {
    if (output[char] < 2) delete output[char];
  }
  return output;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

/*
In Ruby:
def repeatedCharacters(str)
  str .downcase
      .split('')
      .uniq
      .map { |c| [c, str.downcase.count(c)] }
      .filter { |c| c[1] > 1 }
      .to_h
end
*/