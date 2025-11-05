function multisum(num) {
  let sum = 0;
  let i;
  for (i = 3; i <= num; i += 3)   sum += i;
  for (i = 5; i <= num; i += 5)   sum += i;
  for (i = 15; i <= num; i += 15) sum -= i;
  return sum;
}

console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);