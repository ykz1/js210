const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);            // logs 'a'
console.log(myArray[-1]);           // logs 'undefined'

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);           // logs 'd'
console.log(myArray['e']);          // logs 5
console.log(myArray);               // ['e': 5, -1: 'd', 'a', 'b', 'c', 'f']