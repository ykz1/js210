function oddElementsOf(arr) {
  let output = [];
  for (let i = 1; i < arr.length; i += 2) {
    output = [...output, arr[i]];
  }
  return output;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// Q2
console.log();

function mirrorOf(arr) {
  return [...(arr.slice()), ...(arr.reverse())];
}

digits = [4, 8, 15, 16, 23, 42];

console.log(mirrorOf(digits))

// Q3
console.log();

function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// Q4
console.log();

function matrixSums(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    output = [...output, sum];
  }
  return output;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

let matrixSums2 = arr => arr.map(inner => inner.reduce((acc, ele) => acc += ele, 0));
console.log(matrixSums2([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// Q5
console.log();

function uniqueElements(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (!output.includes(arr[i])) output.push(arr[i]);
  }
  return output;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]