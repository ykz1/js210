let rls = require('readline-sync');

let age = rls.question('What is your age? ');
let retireAge = rls.question('At what age would you like to retire? ');
let currentYear = new Date().getFullYear();
let retireYear = currentYear + (retireAge - age);

console.log(`It's ${currentYear}. You will return in ${retireYear}.`);
console.log(`You have only ${retireAge - age} of work to go! Hang in there!`);

// 