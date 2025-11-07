function areArraysEqual(array1, array2) {
  // If lengths are not equal, can return false
  // Find set of unique values from array 1
  // Go value-by-value, and compare counts of value found in array 1 versus array 2
  // If counts don't equal for any value, return false
  // If looped through all unique values without mismatched counts, return true

  if (array1.length !== array2.length) return false;

  let uniques = [];
  for (let i = 0; i < array1.length; i++) {
    const value = array1[i];
    if (uniques.includes(value)) continue;
    if (count(array1, value) !== count(array2, value)) return false;
    uniques.push(value);
  }
  return true;
}

function count(arr, value) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === value) || (equalNaN(arr[i]) && equalNaN(value))) counter++;
  }
  return counter;
}

let equalNaN = value => value !== value;

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) === true);
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]) === true);
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true);
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) === false);
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) === true);
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) === false);
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) === false);
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) === false);
console.log(areArraysEqual([1, 1, 1], [1, 1]) === false);
console.log(areArraysEqual([1, 1], [1, 1]) === true);
console.log(areArraysEqual([1, '1'], ['1', 1]) === true);
console.log(areArraysEqual([NaN, '1'], [NaN, '1']) === true);
console.log(areArraysEqual([NaN, 1], [NaN, NaN]) === false);
console.log(areArraysEqual([NaN], ['1']) === false);
console.log(areArraysEqual([NaN, NaN], [NaN]) === false);
console.log(areArraysEqual([-0, 0], [0, -0]) === true);