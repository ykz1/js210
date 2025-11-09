function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

//  `one()`'s invocation will execute the code defined, and then since a function (`anotherOne`) is returned, we are effectively calling `anotherOne() with the list of arguments provided in line 25.

// First, the code within `one()` executes
// 'Welcome' logged from line 16 (25 > 20 > 16)
// 'to' logged from line 12 (25 > 20 > 17 > 12)
// 'the' logged from line 12 (25 > 21 > 12)
// Second, `anotherOne(77, 97 ...)` is called
// 'Matrix!' logged from line 12 (25 > 12)

// Altogether, Welcome to the Matrix! will be logged, each word on a new line.