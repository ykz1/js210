let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// '[1, 2, 10]' will be logged. When the object referenced by global variable `a` is passed as an argument to `myValue()`'s invocation on line 7, both global variable `a` and local parameter variable `b` point to the same underlying object. On line 4, the bracket notation is used to reassign a new value to the 3rd element in this array object, thereby mutating it for all variables that reference it. When `a` is evaluated on line 8, the mutated object is evaluated and logged.