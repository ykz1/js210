function findFibonacciIndexByLength(digits) {
  let previous = 0n;
  let current = 1n;
  let i = 1n;
  while (String(current).length < digits) {
    [previous, current] = [current, previous + current];
    i++;
  }
  return i;
}

function findFibonacciIndexByLength2(digits) {
  let fibonacci = n => (n <= 1) ? n : (fibonacci(n - 1) + fibonacci(n - 2));
  for (var i = 1; String(fibonacci(i)).length < digits; i++);
  return BigInt(i);
}
console.log(findFibonacciIndexByLength(1n) === 1n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.