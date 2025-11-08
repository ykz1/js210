// Q1

let radianToDegrees = radians => radians * 180.0 / Math.PI;

console.log(radianToDegrees(1));


// Q2
let a = -180;
console.log(Math.abs(a));

// Q3
console.log(Math.sqrt(16777216));

// Q4
console.log(Math.pow(16, 6));

// Q5
let x = 50.72;
let y = 49.2;
let z = 49.87;

console.log(Math.floor(x));
console.log(Math.ceil(y));
console.log(Math.round(z));

// Q6
let rand = (a, b) => Math.round(Math.random() * (Math.max(a, b) - Math.min(a, b)) + Math.min(a, b));

console.log(rand(1, 10));
console.log(rand(1, 10));
console.log(rand(1, 10));
console.log(rand(1, 10));
console.log(rand(1, 10));
console.log(rand(1, 10));
console.log(rand(1, 10));
console.log();
console.log(rand(20, 10));
console.log(rand(20, 10));
console.log(rand(20, 10));
console.log(rand(20, 10));
console.log(rand(20, 10));
console.log(rand(20, 10));
