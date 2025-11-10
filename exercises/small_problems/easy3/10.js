function wordSizes(str) {
  let words = str.split(' ');
  let output = {};
  for (let word of words) {
    const len = word.length;
    if (len === 0) continue;
    output[len] = ++output[len] || 1;
  }
  return output;
}

let wordSizes2 = str => wordSizes(str.replace(/[^a-z ]/gi, ''));

console.log(wordSizes2('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes2('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes2("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes2(''));                                            // {}