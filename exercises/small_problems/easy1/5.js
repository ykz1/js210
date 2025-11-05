let rlSync = require('readline-sync');

let num = rlSync.question('Please enter an integer greater than 0: ');
let command = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

if (command === 's') {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${sum}`);
} else if (command === 'p') {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${num} is ${product}`);
} else {
  console.log('Invalid command.');
}

// Further exploration:
arr = [1, 3, 5,]
sumArray = arr.reduce((acc, num) => acc += num, 0);
productArray = arr.reduce((acc, num) => acc *= num, 1);
console.log(`With array [${arr}], sum is ${sumArray}, product is ${productArray}.`);