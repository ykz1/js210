function startsWith(string, searchString) {
  // Guard clauses:
  // - All strings start with ''
  // - If searchString longer than string, false

  // Don't actually need this because length is 0 and loop never enters
  if (searchString === '') {      
    return true;
  }

  // Also don't need this because string[i] out of index will be undefined which does not equal any possible character of searchString and so will return false at first out-of-index character.
  if (searchString.length > string.length) {
    return false;
  }

  for (let i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false