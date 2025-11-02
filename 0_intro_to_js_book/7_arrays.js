// Q1
/*
array1: 4
array2: 5 consisting of 1 value and 4 unset indexes
array3: 0 because only positive integer indexes will be counted
array4: 3, the last two elements will be removed when we set length to 3
array5: 101, 100 is a positive integer index and JS will fill the the gap from 0 to position 99 with unset values all of which count towards `length`
*/

// Q2
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

myArray.forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

console.log();

myArray.forEach(num => {if (num % 2 === 0) console.log(num)});

// Q3
let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

console.log()

myArray2.forEach(arr => {
  arr.forEach(num => {if (num % 2 === 0) console.log(num)});
});

// Q4
let myArray3 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let myArray4 = myArray3.map(num => (num % 2 === 0) ? 'even' : 'odd');

console.log();
console.log(myArray4);

// Q5
function findIntegers(arr) {
  return arr.filter(element => Number.isInteger(element));
}
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);

console.log();
console.log(integers); // => [1, 3, -4]
 
// Q6
function oddLengths(arr) {
  let lengths = arr.map(element => element.length);
  return lengths.filter(length => length % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log();
console.log(oddLengths(arr)); // => [1, 5, 3]

// Q7

function sumOfSquares(arr) {
  return arr.reduce((acc, ele) => acc + ele**2, 0);
}

let array99 = [3, 5, 7];

console.log();
console.log(sumOfSquares(array99)); // => 83

// Note that if the optional initial value is not provided, the the first element of the array is used as the starting value for the accumulator.

// Q8

function oddLengths2(arr) {
  return arr.reduce((acc, ele) => {
    if (ele.length % 2 !== 0) acc.push(ele.length);
    return acc;
    }, []);
}

let arr999 = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log();
console.log(oddLengths2(arr999)); // => [1, 5, 3]

// Q9

let checkFor3 = arr => arr.includes(3);

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log();
console.log(checkFor3(numbers1));
console.log(checkFor3(numbers2));
console.log(checkFor3(numbers3));

// Q10
let arrV98 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

let arrV99 = arrV98.map(arr => arr.map(element => (element === 6) ? 606 : element));

console.log();
console.log(arrV99);