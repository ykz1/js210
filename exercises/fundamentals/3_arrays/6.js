let reverse = arg => Array.isArray(arg) ? reverseArray(arg) : reverseArray(arg.split('')).join('');

function reverseArray(arg) {
  const output = [];
  for (let i = 0; i < arg.length; i++) {
    const j = arg.length - i - 1;
    output[i] = arg[j];
  }
  return output;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]