const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const ROTATE = 13;

function rot13(str) {
  // Rotate string character-by-character.
  let output = '';
  for (let i = 0; i < str.length; i++) {
    output += rot13Char(str[i]);
  }
  return output;
}

function rot13Char(char) {
  // 1. Set "alphabet wheel" to match char's case.
  let alpha = char === char.toLowerCase() ? ALPHABET : ALPHABET.toUpperCase();
  
  // 2. Find index of char within alphabet wheel.
  let index = alpha.indexOf(char);

  // 3. If not found, return char as-is (i.e. not an alphabetical character).
  if (index === -1) return char;

  // 4. Calculate rotated index value; use % to keep result within +/-26.
  index = (index + ROTATE) % alpha.length;

  // 5. "Rotate" alphabet wheel to find new character; take advantage of `slice()`'s ability to take a negative index.
  return alpha.slice(index)[0];
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// Teachers open the door, but you must enter by yourself.