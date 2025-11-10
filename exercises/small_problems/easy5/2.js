function doubleConsonants(str) {
  let output = '';
  for (let char of str) {
    output += char.match(/[^a-z]|[aeiou]/gi) ? char : char + char;
  }
  return output;
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""