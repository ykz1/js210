// Q1
// This logs [1, 4, 3] because assignment of an element in an array will mutate that array. `array1` and `array2` both reference the same underlying array object, and when that object is mutated, the new value is reflected in both variables

// Q2
/*
- ReferenceError tells us there is a variable `greeting` which has not been defined
- The error starts at character 15 of line 4, when passed as an argument to `console.log`, within definition of a function called `hello`
- `hello` was called on line 13 of the program

*/

// Q3

console.log(Math.sqrt(37));


// Q4

let listA = [1, 6, 3, 2];
let listB = [-1, -6, -3, -2];
let listC = [2, 2];

let largestNum = arr => arr.sort((a, b) => a - b)
                           .reverse()[0];

console.log();

console.log(largestNum(listA));
console.log(largestNum(listB));
console.log(largestNum(listC));


// Q5
// This function will split a string into an array of words, deliminating on spaces, then reverse that array of words, then map each word string to a number equal to each word's length, and finally return that final array of numbers.

// Q6

let allMatches = (arr, regex) => arr.filter(word => regex.test(word));

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log();

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// Q7
// Exception handling is writing try/catch statements into code to purposefully catch errors that may pop up, usually due to uncontrollable external errors which are known but difficult to predict. In these instances, exception handling let developers write programs which continue despite unpredictable errors occuring by also providing instruction on what to do when these errors do occur. 

// Q8

let isNotANumber = arg => arg !== arg;

console.log();
console.log(isNotANumber(2));       // => false
console.log(isNotANumber('NaN'));   // => false
console.log(isNotANumber(NaN));     // => true


// Q9
let isNegativeZero = arg => (arg === 0) && (1 / arg === -Infinity);

console.log();

console.log(isNegativeZero(3));   // => false
console.log(isNegativeZero(0));   // => false
console.log(isNegativeZero(-0));  // => true

// Q10
// Firstly, `++` will coerce the operand into a number before incrementing it by 1. That is why we can pass the string '5' and `++` would still treat it like a number.
// Secondly, y++ returns 5 i.e. the value of `y` before it is incremented. If we wanted to return the value of `y` after it is incremented, we could use `++y`. In both cases, `y` is incremented to value 6, the only difference between `++y` and `y++` is whether the return value is the pre-increment or post-increment value.