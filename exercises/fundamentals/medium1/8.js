function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];                            // This line is the same as `sum = sum + numbers[i]`. On the first iteration, even though `sum` is declared in line 7, it is not assigned a value and will have an initial value of undefined. `undefined + ` any number as the second operand will evaluate to `NaN`, and so `sum` will be `NaN` with every iteration.
  }

  sum;                                            // As well, JS does not implicitly return the last line evaluated, and so even if `sum` were a valid number, the `total()` function would not return it and would instead return `undefined`.
}