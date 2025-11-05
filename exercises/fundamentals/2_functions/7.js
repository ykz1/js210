let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// `7` will be logged. The parameter `a` within `myValue()`'s function definition shadows the global variable `a` declared on line 1. As a result, the re-assignment that happens on line 4 is on the local parameter variable `a`, and not the global variable.