function isPrime(num) {
  if (num <= 1 || (num > 2 && num % 2 === 0)) {
    return false;
  }

  let upperBound = Math.sqrt(num);
  
  if (Number.isInteger(upperBound)) {
    return false;
  }
  
  upperBound = Math.floor(upperBound);

  for (let i = 3; i <= upperBound; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false