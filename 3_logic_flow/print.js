function logMultiples(num) {
  for (let i = 99; i >= num; i -= 2) {
    if (i % num === 0) {
      console.log(i);
    }
  }
}

logMultiples(17);
// output (5x, 3x and 1x)
85
51
17

console.log();

logMultiples(21);
// output (3x and 1x)
63
21

// Further exploration:

function logMultiples2(num) {
  let largest = Math.floor(100 / num) * num;
  for (let i = largest; i >= num; i -= num) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

console.log();
logMultiples2(17);
console.log();
logMultiples2(21);