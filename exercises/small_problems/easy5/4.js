function centerOf(str) {
  let start = Math.ceil(str.length / 2) - 1;
  let end = str.length % 2 === 0 ? start + 2 : start + 1;
  return str.slice(start, end)
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"