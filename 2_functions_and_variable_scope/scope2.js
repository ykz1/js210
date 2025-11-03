// Q1
// 'undefined' will be logged. `a` is declared with `var` and so will have function-scoping within `say()`. However, the `if` block is never evaluated and so `a` is never assigned to a different value than its default value of `undefined`. 

// Q2
// Error will be raised: ReferenceError, `a` is undefined. the `a` defined within the if statement has block scope, and is out-of-scope when referenced as an argument for `console.log`.

// Q3
// Here, `var a` declares a functional-level variable `a`, and that variable is assigned 'hello' in the first line of the function's body. When `hello()` is called, 'hello' will be logged. however, the last line of the code will throw an exception before the code executes because there is no `a` defined at the global level.

// Q4
// When `hello()` is invoked...
// - JS will fail to find `a` in `hello()`'s function scope as well as in the global scope (in that order), then will create `a` as a property under the global object
// - 'hello' will be logged
// On the last line of the code, 'hello' will be logged again when global object's property `a` is referenced and passed as an argument to `console.log`.

// Q5
// `var` has functional scope, and so both `var a` assignments refer to the same global variable. When `a` is passed as an argument to `console.log`, it will evaluate to '4', which is logged.

// Q6
// There are two `a` variables here, one with global scope with the value 'hello', and another with block scope within the `for` loop's body block.
// 'hello' is logged because the global `a` is passed as an argument to `console.log` in the last line of the code.

// Q7
// '4' will be logged, then '3'
// There is only one `a` variable here, and it lives at the global level.
// When `foo()` is invoked in the second last line of code, `a` is reassigned to value 2, then when `bar()` is invoked in the last line of the function's body, it is reassigned to value 3. `bar()` ultimately returns the value 4, which is then passed to be returned by `foo()` and so '4' is printed. 
// Finally, when `a` is passed as an argument to `console.log` in the last line of code, it is evaluated to the value '3', which is the last value it was assigned to within `bar()`'s invocation.

// Q8
// 'superNested' will be logged, followed by 'global'.
// There are two `a`s here, one at the global level which is set to value 'global' and doesn't change throughout the program, and a second `a` scoped at `checkScope()`'s function level. This second `a` is initially set to value 'local', but then reassigned to 'nested' when `nested()` is called, and finally to 'superNested' when `superNested()` is called. This final value of 'superNested' is returned by `superNested()`, then returned by `nested()`, and finally returned by `checkScope()` when it is passed to `console.log()`.

// Q9
// 

let a = 'outer';
let b = 'outer';

console.log(a);   // logs 'outer'
console.log(b);   // logs 'outer'
setScope(a);
console.log(a);   // logs 'outer'
console.log(b);   // logs 'inner'

function setScope(foo) {
  foo = 'inner';  // Reassigns local `foo` to 'inner'
  b = 'inner';    // doesn't find `b` in inner function scope, so looks and finds in global scope. Re-assigns global `b` to 'inner'
}

// Q10
// 

let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);   // logs 50
incrementBy(10);      // increases global `total` by 10 to 60
console.log(total);   // logs 60
console.log(increment); // logs 15, global `increment` never changes. The `increment` in `incrementBy()` is a different local variable.

// Q11
// 'outer' will be logged, then an exception will be thrown.
// After hoisting, `setScope` will be set as a variable with default value `undefined`. 
// When we try to call `setScope()` as a function on line 4, JS will find the variable `setScope` as `undefined` and not as a function, which results in a TypeError.
// The key here is that `setScope()` is defined as a function expression and not a function declaration. In hoisting, function expressions have their variables hoisted but not the function assignment. In contrast, function declarations have both their variables as well as their function bodies hoisted.