let isPalindrome = str => str === str.split('').reverse().join('');

let isRealPalindrome = str => {
  str = str.toLowerCase();
  str = str.replace(/[^a-z]/gi,'');
  return isPalindrome(str);
}

let isPalindromicNumber = num => isPalindrome(String(num));

console.log(isPalindromicNumber(34543) === true);
console.log(isPalindromicNumber(123210) === false);
console.log(isPalindromicNumber(22) === true);
console.log(isPalindromicNumber(5) === true);

// A leading zero will lead to the number being read as a octal number, and our function would no longer work.