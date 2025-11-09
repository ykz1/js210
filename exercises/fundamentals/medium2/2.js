const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// When comparing two objects with the strict equality operators `===`, JS will compare the references i.e. the underlying objects themselves. Even though `person` and `otherPerson` point to objects with the same values, they are indeed different objects from one another. If we wanted both of these identifiers to point to the same underlying objects, we must assign one to the other, like below:

const yetAnotherPerson = person;
console.log(yetAnotherPerson === person);