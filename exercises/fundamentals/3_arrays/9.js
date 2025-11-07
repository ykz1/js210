// The results are because of JavaScript's behaviour when comparing arrays; namely, that JS compares array variables by using their object references. In both cases here, even though the arrays have identical properties and identical elements, they are in fact two different underlying array objects. That is why comparison with `===` results in `false` in both cases. Note that using `==` will have the same results.

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false