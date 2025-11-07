let log = (a = '') => console.log(a);

// Q1
let lastInArray = arr => arr[arr.length - 1];
log(lastInArray([1, 2, 3, 4]));

// Q2
log();

function rollCall(arr) {
  for (let i = 0; i < arr.length; i++) {
    log(arr[i]);
  }
}
rollCall(['Steve', 'Martha', 'Pat']);

// Q3
log();

function rollCallBack(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    log(arr[i]);
  }
}
rollCallBack(['Steve', 'Martha', 'Pat']);

// Q4
log();

function arrayToString(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += String(arr[i]);
  }
  return str;
}

log(arrayToString([1, 2, 3]));