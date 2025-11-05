function gcd(a, b) {
  let upperBound = Math.min(a, b);
  for (let i = upperBound; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1

console.log(gcd(12, gcd(4, 8)));  // 4)
console.log(gcd(gcd(12, 4), 8));  // 4