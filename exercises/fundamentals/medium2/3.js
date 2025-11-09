let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));    //  [5, 7] are passed in as arguments, and 35 + startingBalance of 5 = 40 is returned and logged.

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));    //  [5, 7] passed, and 35 + startingBalance of 10 = 45 is returned and logged

// This code shows variable scope in JS, and how we can access variables in an outer scope from an inner scope (e.g. created by a function definition). 