let log = (a = '') => console.log(a);

// Q1
function firstElementOf(arr) {
  return arr[0];
}
log(firstElementOf(['U', 'S', 'A']));  // returns "U"


// Q2
log();

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

log(lastElementOf(['U', 'S', 'A']));  // returns "A"

// Q3
log();

function nthElementOf(arr, index) {
  return arr[index];
}
let digits = [4, 8, 15, 16, 23, 42];
console.log(nthElementOf(digits, 3));   // returns 16
console.log(nthElementOf(digits, 8));   // returns undefined
console.log(nthElementOf(digits, -1));  // returns undefined

// Q4
// Yes, because arrays are objects, and each index is just a key, and negative numbers are allowed to be keys.

// Q5 
log();

function firstNOf(arr, count) {
  let output = [];
  for (let i = 0; i < count; i++) {
    output = [...output, arr[i]];
  }
  return output;
}

digits = [4, 8, 15, 16, 23, 42];
log(firstNOf(digits, 3));    // returns [4, 8, 15]

// Q6
log();

function lastNOf(arr, count) {
  let output = [];
  let startIndex = arr.length - count;
  for (let i = startIndex; i < arr.length; i++) {
    output = [...output, arr[i]];
  }
  return output;
}

digits = [4, 8, 15, 16, 23, 42];
log(lastNOf(digits, 3));    // returns [16, 23, 42]

// Q7
log();
log(lastNOf(digits, 10));   // returns several undefined elements before actual elements within the array

log();

let safeLastNOf = (arr, count) => lastNOf(arr, Math.min(arr.length, count));

log(safeLastNOf(digits, 10));
log(safeLastNOf(digits, 3));

// Q8
function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]