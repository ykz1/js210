function reverseSentence(str) {
  return str.split(' ')
            .reverse()
            .join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
console.log(reverseSentence('Hello World'));            // "World Hello"