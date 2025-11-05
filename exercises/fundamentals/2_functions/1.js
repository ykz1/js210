var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// Will log 'This is global'. `var` declares variables at the functional level, and so the `myVar` declared on line 4 is scoped to function `someFunction()` and therefore different than the `myVar` declared on line 1, which is at the global level. 