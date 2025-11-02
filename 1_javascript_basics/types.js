// Q1

let x = '13';
let y = 9;

console.log(Number(x) + y);

// Q2

console.log(x * y); // This returns a number that's the product of the two values, because * is not defined for strings and so will convert its operands to numbers

// Q3
let npa = 212;
let nxx = 555;
let num = 1212;

console.log(npa + '-' + nxx + '-' + num);

// Q4
npa = String(npa);
nxx = String(nxx);
num = String(num);

console.log(npa + nxx + num);

// Q5
let bool = true;
let arr = [1, 2, 3];

console.log(bool.toString());
console.log(arr.toString());
