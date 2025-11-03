// Q1
// 'Hello' will be logged. Strings are immutable, and no stirng methods will change the value of its calling string object.

// Q2
// 'Hello' will be logged three times. Strings, as primitives, are immutable. The methods called on `myWord` will all return a new string without impacting the original calling string.

// Q3
// '['Hello', 'Goodbye']' will be logged. Arrays are objects and are mutable; the method `push()` will mutate its caller `myWords` and add the eleemnt 'Goodbye'.

// Q4
// '['Hello']' will be logged. The method `concat` will return a new array without mutating its calling array.

// Q5
// '['Hello']' will be logged. Although a reassignment to the first element of `myWords` would mutate the array, that is not what is happening here because the first element of `myWords` is a string, which is an immutable primitive and so simply calling the string method `toUpperCase()` on it would not change its value.

// Q6
// '['HELLO']' will be logged. Line 2 reassigns the return value from `toUpperCase()` to the first and only element within the array `myWords`, thereby mutating the array. 