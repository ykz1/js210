function stringy(num) {
  let output = '';
  for (let i = 1; i <= num; i++) {
    output += Number(i % 2 === 1);
  }
  console.log(output);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"