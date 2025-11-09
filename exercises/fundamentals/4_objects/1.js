const myObject = {
  a: 'name',     // this works because JS converts `a` to `'a'`
  'b': 'test',
  123: 'c',
  1: 'd',
};
console.log(myObject);
myObject[1];
myObject.a;
myObject[a];    // this would return a ReferenceError because `a` is undefined