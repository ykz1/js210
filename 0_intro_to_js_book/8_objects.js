// Q1

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person.name);

// Q2
// All values are valid keys. JS will coerce non-string key values into string.

// Q3
let myArray = {
  0: 'one',
  1: 'two',
  2: 'three',
  length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// Q4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj).map(key => key.toUpperCase());
console.log(arr)

// Q5
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

console.log(myObj);

// Q6
/*
"foo"                                   => primitive; string
3.1415                                  => primitive; number
[ 'a', 'b', 'c' ]                       => object; array
false                                   => primitive; boolean
foo                                     => identifier; variable
function bar() { return "bar"; }        => object; function
undefined                               => primitive; undefined
{ a: 1, b: 2 }                          => object; object
 */ 

// Q7
myObj.qux = 3;
console.log();
console.log(myObj);

console.log();

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
// Will log 'qux' to console i.e. the only key in myObj' own properties

for (let key in myObj) {
  console.log(key);
}
// Will log 'qux' as well as 'foo' and 'bar' to console, i.e. will include keys within myObj as well as the prototype `myProtoObj` from which it was created.

// Q8
function copyObj(original, keys = false) {
  let output = {};
  if (keys) {
    keys.forEach(key => output[key] = original[key]);
    return output;
  } else {
    return original;
  }
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

// Q9
// Reassignment of a property in an object will mutate that object, and so `foo` is mutated in line 9 when its value at key 'a' is reassigned to 'hi'. On line 15, `foo.a` will return the newly assigned 'hi'. 
// In contrast, reassignment of a string does not mutate that string because strings are immutable. The reassignment that happens on line 10 is a reassignment of the local variable `argument2` and does not impact global variable `qux`. On line 16, 'hello' will be printed i.e. the original value that `qux` was assigned.

// Q10
// 6 primitives: 1, 2, 'a', 'b', false, null
// 4 objects:
//  1. [1, 2, ["a", ["b", false]], null, {}]
//  2. ["b", false]
//  3. {}
//  4. ["a", ["b", false]]

// Q11

let obj8 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj8.bar[3].xyz = 606;

console.log();
console.log(obj8);

// Q12
function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

// Q13
function foo2(bar) {
  console.log(bar());
}

foo2(function() { return 'Welcome' });    // Should print 'Welcome'
foo2(function() { return 3.1415 });    // Should print 3.1415
foo2(function() { return [1, 2, 3] });    // Should print [1, 2, 3]

// Q14
/*
Variables
- hello
- greeting
- name
- xyzzy
- howdy
- foo
Object property names
- a
- b
- c
- d
- 0, 1, 2 array indexes
Primitive values
- ' '
- 1
- 2
- 3
- 4
- 5
- 'Hi'
- 'Grace'
- 'a'
- 'b'
- 'c'
- 'd'
- 0
- 1
- 2
Objects
- function referenced by variable hello
- function referenced by variable xyzzy
- {} 
- { a: 1, b: 2, c: [3, 4, 5], d: {} }
- [3, 4, 5]
- object referenced by foo
*/

// Q15
/*

Variables
- bar
- arg1
- arg2
- foo
- qux
- result

Object property names
- abc
- def
- ghi
- jkl
- mno
- pqr
- 0, 1, 2, 3 index values for outer array
- 0, 1, 2 index values for inner array
- all of above repeated for second object with identical values / elements referenced by `result`

Primitive values
- 'Hello'
- 'Victor'
- 'Antonina'
- 1
- 2
- 3
- 4
- 5
- 6
- 'abc'
- 'def'
- 'ghi'
- 'jkl'
- 'mno'
- 'pqr'
- null
- NaN
- '0'
- '1'
- '2'
- '3'


Objects
- object referenced by `qux` i.e. {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  }
  - [1, 2, 3, [4, 5, 6]]
  - [4, 5, 6]
  - function referenced by `bar`
  - object referenced by `result`, different object but same value as the one referenced by `qux`

*/