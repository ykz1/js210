/*
1. There is one global variable, reassigned in myFunc.
2. There is one global variable, reassigned in myFunc.
3. There is one global variable, mutated in myFunc
4. There are two `myVar`'s, one global and one local parameter of `myFunc()`. 
5. There are two `myVar`'s: one global and one local parameter of `myFunc()`.
6. There are two `myVar`'s: one global and one local parameter of `myFunc()`. The type error occurs because `[0]` attemps to find the first element of `myVar` expecting it to be an array, but `myVar` is `undefined`.
7. There are two `myVar`'s: one global and one local parameter of `myFunc()` which shadows the global `myVar` within the function body.
8. Same as 7
9. There are two `myVar`'s, one global and one local parameter of `myFunc()`. On line 4, when we use `[]` on `myVar`, we are telling JS to look for a `myVar` array variable, and it finds it in the global `myVar`. We then mutate the array by reassigning its first element to value 2.
*/