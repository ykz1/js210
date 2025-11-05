function logOddNumbers(num) {
  for (let i = 1; i <= num; i += 2) {
      console.log(i);
  }
}

logOddNumbers(19);

// Further exploration:

function logOddNumbers2(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      continue;
    } else {
      console.log(i)
    }
  }
}

console.log()
logOddNumbers2(19);