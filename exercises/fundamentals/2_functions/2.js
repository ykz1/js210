var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// 'This is local' will be logged. when `myVar` is referenced in line 5, JS looks within the function scope created by `someFunction()`. It finds the function-scoped variable `myVar` as defined on line 4, and evaluates 'This is local' to be logged.