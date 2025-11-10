function sequence(num) {
  let output =[];
  for (let i = 1; i <= num; i++) {
    output.push(i);
  }
  return output;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]