function union(arr1, arr2) {
  let output = [];
  for (let num of [...arr1, ...arr2]) {
    if (!output.includes(num)) output.push(num);
  }
  return output;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


let union2 = (arr1, arr2) => [...new Set([...arr1, ...arr2])]
console.log(union2([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


let union3 = (...args) => [...new Set(args.flat())];
console.log(union3([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
