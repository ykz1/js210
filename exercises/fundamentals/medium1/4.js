// The problem is that both loops use the same `length` variable, and each loop wil only run a number of times matching the number of elements in the `cols` array. If one column index is passed as an argument, the function will return a 1x1 matrix with 1 element in a nested 2-dimension array; if two column indexes are passed in the `cols` argument, the function will return a 2x2 matrix with 4 eleemnts in a nested 2-dimension array. To fix this, we can simply remove `length = numbers.length` and `length = cols.length`, and instead use the appropriate lengths as the exit conditions for our loops. See changes below:

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0; i < numbers.length; i += 1) {
    for (var j = 0; j < cols.length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]