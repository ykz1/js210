let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);       // Logs [1, 2, 3] 
console.log(myOtherArray);  // Logs [1, 2, 3]: pop() mutates underlying object referenced by both variables

myArray = [1, 2];
console.log(myArray);       // Logs [1, 2]
console.log(myOtherArray);  // Logs [1, 2, 3]: reassignment of myArray does not impact myOtherArray