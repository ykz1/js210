console.log(a);

var a = 1;

// 'undefined' will be logged. The variable declaration for `a` will be hoisted to the top of the program in the creation phase, but it will be set to `undefined`, which is the value it evaluates to on line 1 when `a` is referenced. 