function log(arg = '') {
  console.log(arg);
};

// Q1

log(false || (true && false));
log('false');
log();

log(true || (1 + 2));
log('true');
log();

log((1 + 2) || true);
log('3');
log();

log(true && (1 + 2));
log('3');
log();

log(false && (1 + 2));
log('false');
log();

log((1 + 2) && true);
log('true');
log();

log((32 * 4) >= 129);
log('false');
log();

log(false !== !true);
log('false');
log();

log(true === 4);
log('false');
log();

log(false === (847 === '847'));
log('true');
log();

log(false === (847 == '847'));
log('false');
log();

log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);
log('true');
log();

// Q2

function evenOrOdd(num) {
  return (num % 2 === 0) ? 'even' : 'odd'
};

log();
log(evenOrOdd(3));    // odd expected
log(evenOrOdd(4));    // even expected

// Q3

function evenOrOdd2(num) {
  if (Number.isInteger(num)) {
    return (num % 2 === 0) ? 'even' : 'odd';
  } else {
    return 'Not a valid integer.';
  }
};

log();
log(evenOrOdd2(3));    // odd expected
log(evenOrOdd2(4));    // even expected
log(evenOrOdd2(4.5));    // error message expected

// Q4
// 'Product2', 'Product3', 'Product not found!' will all be logged to console. JS will find a match in `case '113'` and execute the expression in that clause, but because there is no break in the clause, execution will "fall through" and continue in all subsequent `case` clauses.

// Q5
function foo() {
  // Do something
}
function qux() {
  // Do something else
}

if (foo()) {
  'bar';
} else {
  qux();
}

// Q6
// 'Not empty' will be logged because JS evaluates all objects to be truthy and arrays are objects

// Q7

function upCase(string) {
  return (string.length > 10) ? string.toUpperCase() : string;
}
log();
log(upCase('hello world'));
log(upCase('goodbye'));

// Q8
function numberRange(num) {
  if (num < 0) {
    log('Negative');
    return;
  } else if (num <= 50) {
    log('Between 0 and 50');
    return;
  } else if (num <= 100) {
    log('Between 50 and 100');
    return;
  } else {
    log('Greater than 100');
    return;
  }
}
log();
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

// Q9
log();
console.log(false ?? null);         // false
console.log(true ?? (1 + 2));       // true
console.log((1 + 2) ?? true);       // 3
console.log(null ?? false);         // false
console.log(undefined ?? (1 + 2));  // 3
console.log((1 + 2) ?? null);       // 3
console.log(null ?? undefined);     // undefined
console.log(undefined ?? null);     // null

// Q10

function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7);   // 'foo is 5, bar is 7'
show(0, 0);   // 'foo is 0, bar is 0'
show(4);      // 'foo is 4, bar is 42'
show();       // 'foo is 3, bar is 42'