logValue();

function logValue() {
  console.log('Hello, world!');
}

// 'Hello world!' will be logged. When a function is defined through function declaration, JS will joist its declaration up to the top of the program, including both its variable name declaration as well as the function body. As a result, functions defined with function declaration do not need to be defined before they are invoked, which is the case here. 

// Note: if `logValue()` were defined through function expression, JS would throw an error because while the variable name declaration would be hoisted, the assignment would not and when we try to access `logValue` in line 1, the variable would be in the temporal dead zone, and JS would throw a ReferenceError stating that variables cannot be referenced before they are initialized. 

// Further exploration below:

var logValue2 = 'foo';

function logValue2() {
  console.log('Hello, world!');
}

console.log(typeof logValue2);

// String would be logged, because after hoisting, the assignment of logValue2 to 'foo' would sit below the function declaration for the same variable name.