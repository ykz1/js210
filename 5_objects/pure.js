// Q1
// 1. Mutates array variable qux passed in as arguments
// 2. Logs message to display


const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

// Q2
// Functions 3 and 5 are pure functions. They have no side effects and they alwasy produce the same return given known arguments.