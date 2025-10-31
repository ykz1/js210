// 1

first = 'Kyle';
last = 'Zhao';
full = first + ' ' + last;

console.log(full);

// 2

let thousands = 4;
let hundreds = 9;
let tens = 3;
let ones = 6;

console.log((thousands * 1000) + (hundreds * 100) + (tens * 10) + (ones * 1));

// 3

/*
'true'          String
false           Boolean
1.5             Number
2               Number
undefined       Undefined
{ foo: 'bar' }  Object

*/

// 4
console.log('5' + 10);
// This logs 510 because the operator + implicitly coerces operands into string as long as one of the operands is a string

// 5
console.log(Number('5') + 10);

// 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)

// 7
// No, JS will return `undefined` when fetching an element with a non-existing index value

// 8
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];


// 9
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};

// 10
// Evaluates to false because case matters

// 11
// evaluates to 3

//12
// evaluates true because string comparison goes character-by-character and '9' is bigger than '1' i.e. its ASCII character code, which is used for comparison, is larger