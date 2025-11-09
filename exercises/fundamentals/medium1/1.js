console.log((false && undefined));                              // false, circuit break at 1st value
console.log((false || undefined));                              // undefined, both values evaluated
console.log(((false && undefined) || (false || undefined)));    // undefined, evaluated values 1, 3 ,4 (returned)
console.log(((false || undefined) || (false && undefined)));    // false, evaluated 1 3 4
console.log(((false && undefined) && (false || undefined)));    // false, only evaluated 1st value
console.log(((false || undefined) && (false && undefined)));    // undefined, evaluated 1 and 2
console.log(('a' || (false && undefined) || ''));               // 'a', evaluated as true and returned
console.log(((false && undefined) || 'a' || ''));               // 'a', evaluated 1 and 3
console.log(('a' && (false || undefined) && ''));               // undefined, evaluated 1 truthy, 2 and 3 to be false
console.log(((false || undefined) && 'a' && ''));               // undefined, evaluated 1 2