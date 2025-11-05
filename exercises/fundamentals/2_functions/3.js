var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';      // JS looks in immediate function scope, doesn't find, then finds `myVar` at global scope so reassigns that variable.
}

someFunction();
console.log(myVar);

// 'This is local' will be logged. There is only one `myVar` in this code: it is declared in line 1 and then reassigned in line 4.