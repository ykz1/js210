let p = (a = '') => console.log(a);

// Q1 push
let push = (arr, element) => {
  arr[arr.length] = element;
  return arr.length;
}

let count = [0, 1, 2];
p(push(count, 3));         // 4
p(count);                  // [ 0, 1, 2, 3 ]

// Q2 pop
p();

let pop = (arr) => {
  let last = arr[arr.length - 1];
  arr.length--;
  return last;
}

count = [1, 2, 3];
p(pop(count));             // 3
p(count);                  // [ 1, 2 ]

// Q3 unshift
p();
function unshift(arr, value) {
  for (let i = arr.length; i >= 0; i--) {
    if (i === 0) {
      arr[i] = value;
    } else {
      arr[i] = arr[i - 1];
    }
  }
  return arr.length;
}
count = [1, 2, 3];
p(unshift(count, 0));      // 4
p(count);                  // [ 0, 1, 2, 3 ]

// Q4 shift
p();
function shift(arr) {
  let value = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return value;
}
count = [1, 2, 3];
p(shift(count));           // 1
p(count);                  // [ 2, 3 ]