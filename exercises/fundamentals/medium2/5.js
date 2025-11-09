const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);                //  '3' logged. `3.4: 'Orange'` is a property but is not a valid index since it is not integer, and will not count towards the array's `length`. We can also see that it is not a valid index with `array.indexOf('Oranges')`, which would return `-1` i.e. not found.
console.log(Object.keys(array).length);   // '4' logged. The keys returned will be ['0', '1', '2', '3.4'], which reflect all of the keys / property names of `array`. `3.4` is a valid key / property name, but because it is not a positive integer, it is not a valid index.

array[-2] = 'Watermelon';
console.log(array.length);                //  '3' logged again. 
console.log(Object.keys(array).length);   //  '5' logged.