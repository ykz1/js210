function indexOf(str1, str2) {
  if (str2.length > str1.length) return -1;
  if (str2 === '') return 0;

  let limit = str1.length - str2.length;
  for (let i = 0; i <= limit; i++) {
    if (checkMatch(str1, str2, i)) return i;
  }
  return -1;
}

function lastIndexOf(str1, str2) {
  if (str2.length > str1.length) return -1;
  if (str2 === '') return 0;
  
  let limit = str1.length - str2.length;
  for (let i = limit; i >= 0; i--) {
    if (checkMatch(str1, str2, i)) return i;
  }
  return -1;
}

function checkMatch(str1, str2, startIndex) {
  for (let j = 0; j < str2.length; j++) {
    if (str1[startIndex + j] !== str2[j]) return false;
  }
  return true;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1