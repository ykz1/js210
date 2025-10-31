let rlSync = require('readline-sync');    // Returns the readline-sync library as an object
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);