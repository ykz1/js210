const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`); // logs 'function definition code for firstName and lastName because without (), JS will return the property name, which in this case is the function definition. Append () to call the functions.