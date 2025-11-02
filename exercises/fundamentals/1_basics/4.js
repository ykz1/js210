let myName = 'Bob';
const saveName = myName;
myName = 'Alice';
console.log(myName, saveName);

// 'Alice Bob' will be logged. Line 3 reassigns myName from 'Bob' to 'Alice' without impacting the constant saveName

const myName2 = 'Bob';
const saveName2 = myName2;
myName.toUpperCase();
console.log(myName2, saveName2);

// 'Bob Bob' would be returned because toUpperCase will return a new string and will not affect its calling string object. As well, strings are immutable and so neither constants will have their values changed. Furthermore, constants cannot be reassigned after initialization and so their values will never change from 'Bob' in our case.

// Further exploration: primitive types have methods as well because these methods don't mutate their callers, a new value is returned.