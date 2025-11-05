const SQFT_PER_SQM = 10.7639;

let rlSync = require('readline-sync');

let length = rlSync.question("Enter the length of the room in meters: ");
let width  = rlSync.question("Enter the width of the room in meters: ");

areaSQM  = (length * width).toFixed(2);
areaSQFT = (length * width * SQFT_PER_SQM).toFixed(2);

console.log(`The area of the room is ${areaSQM} square meters (${areaSQFT} square feet).`);