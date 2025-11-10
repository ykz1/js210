function swap(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 1) {
      words[i] = swapWord(words[i]);
    }
  }
  return words.join(' ');
}

function swapWord(str) {
  return str.at(-1) + str.slice(1, -1) + str.at(0);
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"