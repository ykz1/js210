// Q1

function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}

console.log(foo(1, 2, 3));

// Q2
function foo2() {
  return {
    bar: function() {
      console.log("bar");
    },
    qux: function(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}

console.log(foo2());

// Q3
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let baz = foo(1, 2, 3).baz;
let bar = foo(1, 2, 3).bar;
let qux = foo(1, 2, 3).qux;

console.log(baz, bar, qux);

// Q4
function foo(arr) {
  return [
    arr[2],
    5,
    arr[0],
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar2 = result[0];
let qux2 = result[1];
let baz2 = result[2];

// Q5
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array2 = [2, 3, 5];
let result2 = product(array2[0], array2[1], array2[2]);

console.log(array2, result2);

// Q6
function product2() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

let result3 = product2(2, 3, 4, 5);
console.log(result3);

// Q7
const {foo5, ...rest} = { foo5: 42, bar: 3.1415, qux: "abc" };
console.log(foo5);         // 42
console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// Q8

const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

const first9 = obj.first;
const second9 = obj.second;
const rest9 = {
  third: obj.third,
  rest: obj.rest,
}

console.log();
console.log(first9, second9, rest9);

// Q9
function qux9() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  return {
    type: animalType,
    age,
    colors,
  }
}

let { type, age, colors } = qux9();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]

// Q10
function func(first, mid1, mid2, mid3, last) {
  return {
    first,
    last,
    middle: [mid1, mid2, mid3],
  }
}
let arr9 = [1 ,2, 3, 4, 5]
let {first, last, middle} = func(...arr9);

console.log(first, middle, last);