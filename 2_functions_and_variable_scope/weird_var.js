// No error thrown before even though we are re-declaring `a`:
var a = 'hello';
console.log(a);           // Logs 'hello' because `var` declarations are hoisted but not assignments
var a = 'goodbye';
console.log(a);


// Also no error thrown when re-declaring function `b` 
b();
function b() {console.log('funcy b')};
b();                      // Logs 're-declared funcy b' because `function` declarations along with their bodies are hoisted
function b() {console.log('re-declared funcy b')};
b();                      // Also logs 're-declared funcy b'

// No error below either 
console.log(c);           // Logs '[Function: c]` because functions are hoisted with their bodies, 
function c() {console.log('funcy c')};
var c = 'goodbye'

// Error throw below in second declaration of a. Even though these two `a`'s live in the same scope, JS will not allow a `let` declaration of a used identifier in the same way that it allows a `var` declaration of a used identifier occupying the same scope.

let a = 'hello';
let a = 'goodbye';