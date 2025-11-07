function missing(arr) {
  let output = [];
  for (let i = Math.min(...arr) + 1; i <= Math.max(...arr) - 1; i++) {
    if (!arr.includes(i)) output.push(i);
  }
  return output;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []