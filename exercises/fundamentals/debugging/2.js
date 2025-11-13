function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {         // The non-strict equality operator here will return true for `0 == false`. Need to use strict equality. `==` would also find equality comparing `false` to empty strings `''` and empty arrays `'[]`.
      return true;
    }
  }

  return false;
}
                                                                               // returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true