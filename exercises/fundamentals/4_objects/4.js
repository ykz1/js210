const myObject = {            // JS will convert prop1 and prop2 to string keys
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';      // becomes myObject['456'], which adds a new property

console.log(myObject[prop2]); // myObject['456'] will log '678'
console.log(myObject.prop2);  // will log '456'


// Further Exploration
const myObj = {};
myObj[myFunc()] = 'hello, ';  // myFun hoisted to top, so can call here, return value of 'funcProp' used as property name

function myFunc() {
  return 'funcProp';
}

console.log(myObj);           // log {funcProp: 'hello, '}
myObj[myFunc()] = 'world!';   // reassigns to 'world!'
console.log(myObj);           // logs {funcProp: 'world!'}