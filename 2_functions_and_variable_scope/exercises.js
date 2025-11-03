// Q1
// ['red', 'green', 'blue', 'yellow'] will be logged. When we pass in global variable `colors` to `updateColors()`, the local variable `colors` is different from global `colors` but they both point to the same underlying array object. The method `push()` mutates its caller, and so both `colors` variables will be changed.

// Q2
// ['red', 'green', 'blue', undefined] will be logged. The parameter `color` has a missing argument when `updateColors()` is invoked on line 8, and so JS will set its value to `undefined`. Similar to previous question, the method `push()` mutates its caller, and so both parameter `colors` and global variable `colors` will be changed i.e. will have `undefined` added to the underlying array object.

// Q3
// ['red', 'green', 'blue, 'purple', 'pink'] will be logged. There is only one underlying array object here and it is referenced by three `colors` variables: one at the global level and two that are locally scoped parameters, each with an invocation of `updateColors()`. The array object is initially declared with three elements, then changed twice, each time adding one additional element through the mutating method `push()`.

// Q4
// ['red, 'green', 'blue', 'purple', 'pink'] will be logged. Similar to before, there is only one underlying array object here and it is referenced by global variable `colors`, local parameter `colors` when `updateColors()` is invoked on line 10, `newColors` when it is assigned to the return value of `updateColors()`, and local parameter `colors` when `updateColors()` is invoked again on line 11. When an array variable is passed as an argument to a function call, what is passed is the reference (i.e. address) to the underlying array object, and so although a new local parameter variable `colors` is initialized each time `updateColors()` is invoked, the local variable points to the same underlying object that global `colors` points to. Similarly, when local variable `colors` is returned by `updateColors()`, the reference / address to the same underlying array object is assigned to the new global variable `newColors` in line 10.

// Q5
// ['red', 'green, 'blue'] will be logged. 
// On line 14, global variable `colors` is passed to `removeColor()`'s invocation, and reference to this array object is assigned to local parameter `colors`. The `pop()` method is mutating and will change the underlying array object that both `colors` variables point to.
// On line 10, JS will look for variable `color` locally in the function scope, fail to find it, and the look for and find global variable `color` declared on line 1. This global variable `color` is reassigned to value 'blue', which is the return value of `pop()` i.e. the last element that was removed from `colors`. 
// The array object that both `colors` points to is returned by `removeColor()` and assigned to new global variable `newColors`. On line 15, global variable `colors` is passed to `addColor()`'s invocation, along with global variable `color` which has value 'purple'. Within `addColor()`, the mutating method `push()` is called on `colors` to append 'purple' to the array. The key here is that there is only one array object in this program, and it is referenced by global variable `colors` and `newColors` as well as local variables `colors` (once in `addColor()`'s invocation on line 15 and in `removeColor()`'s invocation on line 14).

// Q6
// 'hello!!!', 'Hello', and 'hello!!!' are logged. The key here is that strings are immutable, and secondly neither of the defined functions accept arguments and so it doesn't matter that we are passing in variables upon their invocations. When `exclaim()` is invoked, it reassigns global `word` to `hello!!!` an also returns this string.

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!';                         // global `word` reassigned 'hello!!!'
}

let word = 'hello';
let capitalizedWord = capitalize(word);         // 'Hello' is returned and assigned
let exclaimedWord = exclaim(capitalizedWord);   // 'hello!!!' is returned and assigned

console.log(word);                              // 'hello!!!' is logged
console.log(capitalizedWord);                   // 'Hello' is logged
console.log(exclaimedWord);                     // 'hello!!!' is logged

// Q7
// 'hello', 'Hello', and 'Hello!!!' will be logged. Same as previous question, except `exclaim()` here does accept a parameter, and so the value of `capitalizedWord` i.e. 'Hello' will be assigned to the local variable `word` here, which shadows global variable `word`.