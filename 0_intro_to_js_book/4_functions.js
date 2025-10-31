// Q1
// Line 7 will print '1'. Even though the variable `bar` initialized on line 1 is accessible and in scope within the function definition for `foo()`, the variable `bar` initialized on line 3 is a new variable with the same name, but its scope is limited to the function definition. As a result, when we retrieve `bar` on line 7, the first `bar` initialized on line 1 is the one referenced.


// Q2

function getName(which) {
  let rlSync = require('readline-sync');
  return rlSync.question(`What's your ${which} name?\n`);
};

firstName = getName('first');
lastName = getName('last');
console.log(`Good morning, ${firstName} ${lastName}`);

// Q3

function multiply(num1, num2) {
  return num1 * num2;
};

let rlSync = require('readline-sync');

let num1 = rlSync.question('Enter the first number: ');
let num2 = rlSync.question('Enter the second number: ');

console.log(`${num1} x ${num2} = ${multiply(num1, num2)}`);

// Q4
// Nothing is logged because execution within the function `scream()` stops at line 3, and line 4 which would otherwise log 'Yipeee!!!!' to the console is never executed.

// Q5
// Nothing is logged. `scream()`'s function invocation on line 5 has a significant return value of 'Yipeee!!!!' but nothing is done with that value.

// Q6
// Function arguments are the values 2, 3, and 4 on line 6
// Function body is the code within the { on line 1 and } on line 4
// Function declaration is line 1 through 4
// Function invocation happens on line 6 with `multiplyNumbers()`
// Function name is 'multiplyNumbers'
// Function parameters are defined on line 1 and are the variables `num1`, `num2`, `num3`
// Function return value is whatever `result` evaluates to on line 3, in this case the value 24
// Variables in this program are: 
// - `multiplyNumber` because function names are variable names in JS
// - `num1`, `num2`, and `num3` are parameters which are local variables 
// - `result` is a local variable within `multiplyNumbers()`'s definition
// - `product` is a global variable declared on line 6

function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

// Q7
// Two lines would be logged to console: 'Hello' and then 'undefined'. JS has lenient arity, so the function `foo()` would execute fine even though there is a missing argument in its invocation on line 6. The parameter `qux` does not have an argument value to assign to, but it is still initialized with the method invocation and set to an initial value of `undefined`. When `undefined` is passed to `console.log` on line 3, the string 'undefined' will be logged to console.

// Q8
// Two lines would be logged to console: '42' and then '3.1415'. JS has lenient arity, so the function `foo()` would execute fine even though there is an extra argument passed on its invocation on line 6. The first two arguments are assigned to the two defined parameters, and the last argument '2.718' is simply ignored.

// Q9
// - `multiply`, `getNumber`, and `parseFloat` are all function names and variable names
// - `left` and `right` (defined on line 1), and `prompt` (defined on line 6) are parameter variables
// - `product` is a local variable
// - `left` and `right` (declared on lines 10 and 11) are global variables of the program
// - `console` is a variable name for the Console object. `log` is a property of that object and not a variable name

// Q10
// Global: `console`, `left` (declared on line 10), `right` (declared on line 11), `parseFloat`, `getNumber` and `multiple`
// Local: `left` and `right (declared as parameters on line 1), `product`, `prompt`

// Q11
// No, they are different. 
// The `left` and `right` defined on line 1 are parameters of the function `multiply()`, and they are local to the function's definition.
// In contrast, the `left` and `right` declared on lines 10 and 11 are global variables.