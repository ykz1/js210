let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// `7` will be logged. Numbers are immutable primitives, and a number variable passed as an argument to any function will never have its valued changed. 