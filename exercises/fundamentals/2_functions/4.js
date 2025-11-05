var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// 'This is global' will be logged. On line 4, `myvar` is not found in `someFunction()`'s inner scope, so JS looks outwards and finds it in the global scope, evaluating the variable its assigned value upon declaration on line 1.