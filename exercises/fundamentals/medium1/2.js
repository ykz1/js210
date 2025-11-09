// This loop will run indefinitely: i evaluated at 0 and if condition returns true with every loop since i is never incremented.

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}