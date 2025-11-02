// Q1

let apples = 3;
let bananas = 5;

console.log(apples == bananas); // False because 3 is not 5

// Q2

bananas = '3'

console.log(apples == bananas); // True because 3 will be cast to '3'

// Q3

console.log(apples === bananas); // False because no casting and number 3 is not string '3'

// Q4

if (apples === bananas) {
  console.log('Equal');
} else {
  console.log('Not equal');
}

// Q5
if (apples === bananas) {
  console.log('Equal');
} else if (apples == bananas) {
  console.log('Kind of equal');
} else {
  console.log('Not equal');
}

// Q6
if (apples === bananas) {
  console.log('Equal');
} else {
  if (apples == bananas) {
    console.log('Kind of equal');
  } else {
  console.log('Not equal');
  }
}

// Q7

apples = 3;
bananas = 3;
let areEqual = (apples === bananas);

console.log(areEqual);

// Q8
apples = 3;
bananas = undefined;
eitherOr = (apples || bananas);
console.log(eitherOr);

// Q9
bananas = 1
eitherOr = (apples || bananas);
console.log(eitherOr);

// Q10
let lastName = 'Zhao';
let familyMessage;

familyMessage = lastName === 'Zhao' ? 'Work hard' : 'Take a break';

console.log(familyMessage);