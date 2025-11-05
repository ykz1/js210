function trim(str) {
  let firstIndex = null;
  let lastIndex = null;
  let i;
  let j;
  let output = '';

  // Use one loop, work inwards from either ends of string, stop iterating if 1) parsed entire string; or 2) non-space characters are found on both ends of string. Save index of first and last non-space characters found.
  for (i = 0; i < str.length && (!firstIndex || !lastIndex); i++) {
    j = str.length - i - 1;
    firstIndex ||= (str[i] !== ' ' ? i : null);
    lastIndex  ||= (str[j] !== ' ' ? j : null);
  }

  if (firstIndex === null || lastIndex === null) {
    return '';
  }

  for (i = firstIndex; i <= lastIndex; i++) {
    output += str[i];
  }
  return output;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
console.log(trim('  abc                                       '));  // "abc"