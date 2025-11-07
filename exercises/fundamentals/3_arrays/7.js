function shift(arr) {
  if (arr.length === 0) return undefined;

  let returnElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  
  arr.length--;

  return returnElement;
}


function unshift(arr, ...args) {
  let oldArray = arr.slice();
  let appendArgs = Array.isArray(args) ? args : [args]
  for (let i = 0; i < oldArray.length + appendArgs.length; i++) {
    if (i < appendArgs.length) {
      arr[i] = appendArgs[i];
    } else {
      arr[i] = oldArray[i - appendArgs.length];
    }
  }
  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log();

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

console.log();

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]

console.log('// ========================');

function shift2(arr) {
  let output;
  if (arr.length !== 0) {
    output = arr.splice(0, 1)[0];
  }
  return output;
}

function unshift2(arr, ...args) {
  arr.splice(0, 0, ...args);
  return arr.length;
}

console.log(shift2([1, 2, 3]));                // 1
console.log(shift2([]));                       // undefined
console.log(shift2([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log();

console.log(unshift2([1, 2, 3], 5, 6));        // 5
console.log(unshift2([1, 2, 3]));              // 3
console.log(unshift2([4, 5], [1, 2, 3]));      // 3

console.log();

const testArray2 = [1, 2, 3];
console.log(shift2(testArray2));                // 1
console.log(testArray2);                       // [2, 3]
console.log(unshift2(testArray2, 5));           // 3
console.log(testArray2);                       // [5, 2, 3]