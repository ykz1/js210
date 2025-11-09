// Snippet 1
// 'The total value is 15' will be printed. JS will hoist function declarations above `var` declarations. As a result, the variable `counter` will initially refer to the function defined, but then be reassigned to the value 5 with the first line of code. As a result, JS evaluates `counter` on line 3, it will evaluate to `5`.

// Snippet 2
// 'The total value is NaN' will be logged. JS will hoist the `var` initialization for `counter` to be right below the function declaration for `counter()`. However, it is only the initialization that is hoised, and not the assignment of `counter` to value `5`. As a result. JS will see that the variable `counter` is already assigned to a function, and will ignore the `var` initialiation. By the time `counter` is evaluated as an argument, it still references the function defined at the beginning of the code. However, because we are referencing `counter` as a variable, rather than invoking the function it points to with `counter()`, JS will return the function object. When we use `*` with a function object as an operand, JS will return NaN. And so NaN will be stringified and logged.

// Snippet 3
// 'The total value is 15' will be logged. JS will hoist the function declaration above the `var` statement. As a result, when executed, it will be as if the assignment of `counter` to value `5` happens after the assignment of `counter` to the function declared with `function`. 

// Snippet 4
// An exception will be thrown at line 1. The function declaration for `counter` will be hoisted to the top of the program upon execution (in the creation phase). And so when JS sees  the `let` statement, it will try to declare `counter` but see that the identifier has already been declared by `function`.


// Overall, these 4 snippets of code demonstrate how hoisting works in JavaScript. Specifically it shows how identifiers declared with `function`, `var`, and `let` are treated in the creation phase of code execution, and how hoisting impacts the order of our code written. 