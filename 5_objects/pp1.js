// Q1
let objectHasProperty = (obj, string) => Object.keys(obj).includes(string);

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog') === true);
console.log(objectHasProperty(pets, 'lizard') === false);
console.log(objectHasProperty(pets, 'mice') === true);

// Q2
console.log()

let incrementProperty = (obj, string) => obj[string] = (obj[string] || 0) + 1;

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// Q3
console.log();

function copyProperties(obj1, obj2) {
  let count = 0;
  for (let name in obj1) {
    obj2[name] = obj1[name];
    count++;
  }
  return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

// Q4
console.log()
function wordCount(str) {
  let words = str.split(' ');
  let output = {};
  for (let word of words) {
    output[word] = (output[word] || 0) + 1;
  }
  return output
}
console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }