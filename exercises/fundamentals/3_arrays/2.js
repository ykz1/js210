let arr1 = [1, 2, 3, 4];
let arr2 = arr1.slice();
let arr3 = arr2.reduce((acc, ele) => acc = [...acc, ele], []);

arr1.push(5);   // Only arr1 will be changed, because arr2 and arr3 reference different array objects.

console.log(arr1);
console.log(arr2);
console.log(arr3);