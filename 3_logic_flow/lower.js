const CAPITAL_START = 'A'.charCodeAt();
const CAPITAL_END   = 'Z'.charCodeAt();
const CASE_DELTA    = 'a'.charCodeAt() - 'A'.charCodeAt();

function toLowerCase(string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    let code = string[i].charCodeAt()
    if (code >= CAPITAL_START && code <= CAPITAL_END) {
      output += String.fromCharCode(code + CASE_DELTA);
    } else {
      output += string[i];
    }
  }
  console.log(output);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"