function slice(arr, start, end) {
  let output = [];
  for (let i = start; i < end; i++) {
    output = [...output, arr[i]]
  }
  return output;
}
console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// Q2
console.log();

function splice(arr, start, count){
  let extraction = [];

  for (let i = start; i < arr.length; i++) {
    if (i < start + count) {
      extraction = [...extraction, arr[i]];
    } else {
      arr[i - count] = arr[i];
    }
  }
  
  arr.length -= count;
  return extraction;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]

// Q3
console.log();

function concat(arr1, arr2) {
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    output = [...output, arr1[i]];
  }
  for (let i = 0; i < arr2.length; i++) {
    output = [...output, arr2[i]];
  }
  return output;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

// Q4
console.log();

function join (arr, str) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += String(arr[i]);
    if (i < arr.length - 1) output += str;
  }
  return output;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'