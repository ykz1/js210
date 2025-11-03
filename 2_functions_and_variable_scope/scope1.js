// Q1
/*
Line 8: logs 'outer' because that is the `a` found at the global scope of the program
Line 9: logs 'inner' because the `a` found is at the function scope of `testScope()`
Line 10: still logs 'outer' for the same reason as line 8
*/

// Q2
/*
Line 8:   logs 'outer' because that is the `a` found at the global scope of the program
Line 9:   logs 'inner' because `a` is reassigned in line 4. Note that this reassignment is to the same variable as the `a` declared on line 1
Line 10:  logs `inner` 
*/


// Q3
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';                  // Reassignment of global variable `basket`
  }

  console.log(basket);              // Would log 'empty' when invoked

  let shop2 = function() {
    basket = 'computer';            // Reassignment of global variable `basket`
  };

  const shop3 = () => {
    let basket = 'play station';    // Declaration of new local variable `basket` scoped to this block
    console.log(basket);            // Would log 'play station' when invoked
  };

  shop1();                          // Global variable `basket` reassigned to 'tv'. Nothing logged
  shop2();                          // Global variable `basket` reassigned to 'computer'. Nothing logged
  shop3();                          // Local variable `basket` evaluates to 'play station', which is logged

  console.log(basket);              // Global variable `basket` evaluates to 'computer', which is logged
}

goShopping();                       // Logs: 'empty', 'play station', then 'computer'

// Q4
function hello() {
  a = 'hi';                         // When we don't explicitly declare a variable, JS will look for this variable bottom-up through all scopes until it reaches the global scope. If the variable is not found, then JS will create it as a property of the glohbal variable. This works but is not good practice: we should be explicit in declaring variables at the intended scope. 
}

hello();                            // Invoking the function will assign 'hi' to global variable `a`
console.log(a);                     // Ultimately, 'hi' is logged here because the global variable `a` is evaluated.

// Q5
function hello2() {
  let b = 'hello';                  // `b` is declared and scoped to the function `hello2()`
}

hello2();
try {
  console.log(b);                     // ReferenceError occurs here because there is no `b` defined at the global scope.
} catch (exception) {
  console.log(exception.name + ': ' + exception.message);
}

// Q6
console.log(a6);                    // a6's declaration is hoisted, but its assignment is not. Since it was declared with `var`, `a6` is initialized with a value of `undefined`, which is what gets logged here.

var a6 = 1;                       

// Q7
try{
  console.log(a7);                     // `a7`'s declaration is hoisted, but since it was declared with `let`, it is in the temporal dead zone and will not be set to any value. As a result, this line will throw a ReferenceError telling us we cannot access it before it is initialized.
} catch (error) {
  console.log( error.name + ': ' + error.message );
}

let a7 = 1;

// Q8
try {
  console.log(a8);                      // ReferenceError telling us `a8` is not defined. 
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

function hello8() {
  a8 = 1;                             // `hello()` is hoisted to the to the application alongside its body. However, the function is never called and so JS never looks for `a8` and never declares it with an unset value at the global level.
}