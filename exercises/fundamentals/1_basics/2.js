const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {            // true and will log
  console.log('Hello');
}

if (!myString) {            // strings are truthy, and ! negates that so will not log
  console.log('World');
}

if (!!myArray) {            // objects are truthy, and !! is unecessary here, will log
  console.log('World');
}

if (myOtherString || myArray) {   // empty string '' is false in JS, but [] is truthy and will log
  console.log('!');
}