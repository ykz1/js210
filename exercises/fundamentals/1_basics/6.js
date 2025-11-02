let rlSync = require('readline-sync');


let phrase = rlSync.question('Enter a phrase: ');

console.log(`There are ${phrase.length} characters in "${phrase}"`);

// Further exploration:
let alphas = phrase.match(/[a-zA-Z]/g).length;

console.log(`There are ${alphas} alphabetical characters in "${phrase}"`);