const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);                   // Adding element-by-element like this results in two identical but different array objects referenced by the two variables.
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();    // Mutates array1, but does not impact array2
  }
}

console.log(array2);    // Logs original capitalized but not uppercase names

// Further exploration:
// - When object variables are passed, it is the reference to the underlying object that is passed, and so when we push an object element from array1 into array2, both elements reference the same underlying object. As a result, when we mutate the object, the change would be reflected in both arrays
// - We would have to reassign the new value to array2's element as well with each iteration.