// Q1
// 'Hello' will be logged from line 2, and again on line 8. Line 3's reassignment will change the value of local variable `word` after it has already been logged, and will have no impact on global variable `myWord`.

// Q2
// 'Hello' will be logged from line 2. 'HELLO' will be returned by `changeMyWord()` and this return value is used in a reassignment for `myWord`. 'HELLO' will be logged from line 9.

// Q3
// 'Hello' will be logged from line 2, then again from line 9. `myOtherWord` is declared and set to the value 'HELLO', which is returned by `changeMyWord()`. 'HELLO' will be printed from line 10.

// Q4
// ['Hello', 'Goodbye'] will be logged from line 2, then ['Hi', 'Goodbye'] will be logged from line 8. The reassignment in line 3 mutates the array object that local parameter `words` points to, which is also the same object that global variable `myWords` points to. 

// Q5
// ['Hello', 'Goodbye'] will be logged from line 2, and again on line 8. The reassignment of local variable `words` on line 3 has no bearing on global variable `myWords`, and in fact would lead to `words` pointing to a different array object in memory. 