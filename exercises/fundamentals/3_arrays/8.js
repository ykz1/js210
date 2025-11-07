function slice(array, begin, end) {
  let output = [];
  for (let i = begin; i < Math.min(array.length, end); i++) {
    output.push(array[i]);
  }
  return output
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]


console.log('=====================');

function splice(array, start, deleteCount, ...args) {
  //  1. Extract from original array:
  //    a) Elements before insertion / deletion
  //    b) Elements for deletion
  //    c) Elements after deletion
  //  2. Change / mutate array
  //    a) Add original elements before insertion / deletion
  //    b) Insert new elements
  //    c) Add original elements after deletion
  //  3. Resize array
  //  4. Return extracted / deleted elements

  // Set guard clauses around start and end indexes for deletion
  start = Math.min(start, array.length);
  let deleteEnd = Math.min(start + deleteCount, array.length);

  let newLength = array.length - Math.min(deleteCount, array.length - start) + args.length;

  // Extract needed elements from original array
  let toDelete = [];
  let trailingElements = [];
  for (let j = 0; j < array.length; j++) {
    if (j >= start && j < deleteEnd) {
      toDelete.push(array[j]);
    } else if (j >= deleteEnd) {
      trailingElements.push(array[j])
    }
  }

  // Change / mutate array starting from start index
  let i = start;
  // Add new eleemnts
  for (let j = 0; j < args.length; j++) {
    array[i] = args[j];
    i++;
  }
  // Add trailing elements
  for (let j = 0; j < trailingElements.length; j++) {
    array[i] = trailingElements[j];
    i++;
  }

  // Resize array
  array.length = newLength;

  // Return extracted elements
  return toDelete;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]

// Delete more than we add
console.log();
arr6 = [1, 2, 3, 4, 5];
console.log(splice(arr6, 1, 3, 'two'));             // [2, 3, 4]
console.log(arr6);                                  // [1, 'two', 5]

// Delete more than array size
console.log();
arr7 = [1, 2, 3, 4, 5, 6, 7]
console.log(splice(arr7, 0, 10, 'two'));
console.log(arr7);