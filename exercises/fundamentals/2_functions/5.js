function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// 'This is global' will be logged. On line 4, JS will look for and fail to find `myVar` at the immediate scope i.e. the function scope, then proceed "upwards" to the global scope, where it also fails to find `myVar`. At that point, JS will create `myVar` as a property of the global object and set it to the value 'This is global'.