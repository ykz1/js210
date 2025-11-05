function checkGoldbach(expectedSum) {
  let primePairs = [];
  for (let a = 2; a <= expectedSum / 2; a++) {
    let b = expectedSum - a;
    if (isPrime(a) && isPrime(b)) {
      primePairs.push([a, b]);
    }
  }
  printPairs(primePairs);
}

function printPairs(arr) {
  if (arr.length === 0) {
    console.log(null);
  } else {
    arr.forEach(pair => console.log(pair[0], pair[1]));
  }
}

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

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53