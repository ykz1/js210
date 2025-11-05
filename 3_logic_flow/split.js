function splitString(string, delimiter) {

  // Special cases:
  // - no delimiter: return error meesage
  // - empty delimiter: return each character on new line
  // - starts with delimiter: log empty line first
  // - ends with delimiter: don't log empty line at end

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
  } else if (delimiter === '') {
    for (let i = 0; i < string.length; i++) {
      console.log(string[i]);
    }
  } else {
    let line = '';
    for (let i = 0; i <= string.length; i++) {
      if (string[i] === delimiter || (i === string.length && line !== '')) {
        console.log(line);
        line = '';
      } else {
        line += string[i];
      }
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

console.log();
splitString('hello');
// logs:
// ERROR: No delimiter

console.log();
splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

console.log();
splitString('hello', ';');
// logs:
// hello

console.log();
splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello