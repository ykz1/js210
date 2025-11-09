const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;        // [5, 5, -1: 5, -2: 5]

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;    // sum is 20, length is 2, returns 
}

console.log(average(myArray));  // returns and logs 10

// The key here is that the for loop iterates through all 4 elements, but length will only count the positive integer indexes, of which there are 2


function average2(array) {
  let sum = 0;
  let count = 0;
  for (let i = -2; i < array.length; i++) {
    sum += array[i];
    count++;
  }
  return sum / count;
}
console.log(average2(myArray));  // returns and logs 10
