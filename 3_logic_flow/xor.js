function isXor(a, b) {
  return (!!a && !b) || (!a && !!b);
}

console.log(isXor(false, true) === true);
console.log(isXor(true, false) === true);
console.log(isXor(false, false) === false);
console.log(isXor(true, true) === false);
console.log(isXor(false, 3) === true);
console.log(isXor('a', undefined) === true);
console.log(isXor(null, '') === false);
console.log(isXor('2', 23) === false);

let isXor2 = (a, b) => !!a !== !!b;

console.log(isXor2(false, true) === true);
console.log(isXor2(true, false) === true);
console.log(isXor2(false, false) === false);
console.log(isXor2(true, true) === false);
console.log(isXor2(false, 3) === true);
console.log(isXor2('a', undefined) === true);
console.log(isXor2(null, '') === false);
console.log(isXor2('2', 23) === false);
