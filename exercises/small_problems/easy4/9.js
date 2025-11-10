function countOccurrences(arr) {
  let uniques = {};
  for (let ele of arr) {
    uniques[ele] = ++uniques[ele] || 1;
  }
  for (let key in uniques) {
    console.log(`${key} => ${uniques[key]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1