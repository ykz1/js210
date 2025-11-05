let rlSync = require('readline-sync');

let bill = rlSync.question(' What is the bill? ');
let tipPercentage = rlSync.question(' What is the tip percentage? ');

let tip = (bill * tipPercentage / 100).toFixed(2);
let total = (bill * (1 + tipPercentage / 100)).toFixed(2);

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);