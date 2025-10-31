// Q1

let name = 'Victor';
console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.`);

// Q2

let age = 20;

let future = 10;
console.log(`In ${future} years, you will be ${age + future} years old.`);
 
future += 10;
console.log(`In ${future} years, you will be ${age + future} years old.`);
 
future += 10;
console.log(`In ${future} years, you will be ${age + future} years old.`);
 
future += 10;
console.log(`In ${future} years, you will be ${age + future} years old.`);
 

// Q3
// An error will be caused because the variable `foo` is out-of-scope: it was declared within a block and we are trying to call or use it outside of that block

// Q4
// 'Victor' will be used in all cases because constants cannot be reassigned after they are declared. Line 6 will throw an exception because JS will not allow reassignment of constants

// Q5
// 'bar' will be logged. On line 3, although the outer scope variable `foo` is in scope within the inner block, a new variable with the same name `foo` is declared with block scope—this is a different variable than the `foo` declared on line 1. On line 6, we are in the outer scope and so when we refer to `foo`, we are referring to the variable declared on line 1 and not the one declared on line 6.

// Q6
// No it will not produce an error for the same reason as Q5 i.e. constants defined with `const` have the same scoping rules as variables declared with `let`. The second constant `FOO` declared on line 3 refers to a different `FOO` than the one declared on line 1. On line 6, the `FOO` constant declared on line 1 is referenced.