// Q1

// let rlSync = require('readline-sync');
// let age = Number(rlSync.question("What's your age? "));

let age = 35;

for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
};

// Q2
console.log('');

function factorial(n) {
  let product = 1;
  for (let num = 1; num <= n; num++) {
    product *= num;
  };
  return product;
};

console.log(factorial(5));

// Q3
// This while loop goes on endlessly because we are using an assignment as a break condition in line 3; this expression will always evaluate as true and so the loop never ends.

// Q4
// No error will be raised, and the numebs 1 through 5 are logged to console. All three components expected in a `for` loop are present. Even though the incrementing part is blank, `i` is incremented in the block. `i` starts as value 0, and then is incremented in the argument passed to `console.log`.

// Q5

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;
do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// Q6

let factorial2 = n => (n === 1) ? n : n * factorial2(n - 1);

console.log(factorial2(1));     // => 1
console.log(factorial2(2));     // => 2
console.log(factorial2(3));     // => 6
console.log(factorial2(4));     // => 24
console.log(factorial2(5));     // => 120
console.log(factorial2(6));     // => 720
console.log(factorial2(7));     // => 5040
console.log(factorial2(8));     // => 40320