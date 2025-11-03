// Q7
// 

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';                           // loal `word` reassigned to `Hello!!!`
}

let word = 'hello';
let capitalizedWord = capitalize(word);           // 'Hello' returned and assigned
let exclaimedWord = exclaim(capitalizedWord);     // 'Hello!!!' returned and assigned

console.log(word);                                // 'hello' logged
console.log(capitalizedWord);                     // 'Hello' logged
console.log(exclaimedWord);                       // 'Hello!!!' logged