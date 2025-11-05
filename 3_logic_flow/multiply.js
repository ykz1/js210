function multiplesOfThreeAndFive() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log(`${i}!`);
      } else {
        console.log(`${i}`);
      }
    } else if (i % 5 === 0) {
      console.log(`${i}`);
    }
  }
}

multiplesOfThreeAndFive();

// Further exploration:

function multiplesOfThreeAndFive2(start, end) {
  for (i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}!`);
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(`${i}`);
    }
  }
}
console.log();
multiplesOfThreeAndFive2(1, 100);

console.log();
multiplesOfThreeAndFive2(2, 41);