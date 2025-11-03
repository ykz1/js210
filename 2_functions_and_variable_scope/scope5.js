// Q1
// 'Hello' twice. The two variables point to different spaces in memory, both with the value 'Hello'

// Q2
// 'Goodbye' followed by 'Hello' will be logged. When `myWord` is reassigned, nothing happens to `myOtherWord`.

// Q3
// ['Hi', 'Goodbye'] will be logged twice. When `myOtherWords` is assigned to value of `myWords`, what is "copied over" is the memory address of the space containing the array object. As a result, both `myWords` and `myOtherWords` point to the same underlying array object. When that object is mutated with a reassignment of its first element, this change is reflected in the values that both variables evaluate to.

// Q4
// ['Hi', 'Bye'] will be logged, then ['Hello', 'Goodbye']. Line 3 is a reassignment of `myWords` to a new array object, which does not impact `myOtherWords`.

// Q5
// ['Hi', 'Goodbye'] will be logged, then 'Hello'. On line 2, the value 'Hello' is assigned to `myWord`, but this lives in a different memory space than the 'Hello' in `myWords`. When the first element of `myWords` is reassigned to 'Hi' in line 3, the array is mutated by the string variable `myWord` is untouched.

// Q6
// ['Hi', 'Goodbye'] will be logged, then 'Hello'. When the first element of `myWords` is reassigned to the value referenced by `myWord`, both of these string variables reference the value 'Hi' but they are different spaces in memory. When the reassignment of `myWord` happens on line 4, it has no impact on the string in the first element of `myWords`.