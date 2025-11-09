function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// When `debugIt()` is called on line 10 above, the function defined will execute. Within `debugIt()`, the function declaration for `logger()` will be hoisted to the top of the function in the creation phase. When `logger()` is invoked on line 7, JS will look for the identifier `status`, it will not find it in the inner function scope created by `logger()` and will move up the hierarchy and and find it as a constant variable in the function scope created by `debugIt()`. `status` evaluates to `debugging`, which is ultimately logged.