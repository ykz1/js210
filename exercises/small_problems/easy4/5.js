function interleave(arr1, arr2) {
  let output = [];
  for (let i in arr1) {
    output.push(arr1[i], arr2[i]);
  }
  return output;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]