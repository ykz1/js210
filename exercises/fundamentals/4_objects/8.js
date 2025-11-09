function penultimate(string) {
  return string.split(' ').reverse()[1];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
let str = 'Launch School is great!';
console.log(penultimate(str));
console.log(str);