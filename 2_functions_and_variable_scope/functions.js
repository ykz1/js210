let average = (arr) => sum(arr) / arr.length;

let sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};


console.log(average([4, 5, 6, 6, 9]));

let temperatures = [21, 22, 17, 5, 30];

console.log(average(temperatures));