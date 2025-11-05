function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0)   return true;
  return false;
}


console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2015) === false);
console.log(isLeapYear(2100) === false);
console.log(isLeapYear(2400) === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(1900) === false);
console.log(isLeapYear(1752) === true);
console.log(isLeapYear(1700) === false);
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === false);
console.log(isLeapYear(400) === true);

// Written as one line:
let isLeapYear2 = year => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);


console.log();
console.log(isLeapYear2(2016) === true);
console.log(isLeapYear2(2015) === false);
console.log(isLeapYear2(2100) === false);
console.log(isLeapYear2(2400) === true);
console.log(isLeapYear2(240000) === true);
console.log(isLeapYear2(240001) === false);
console.log(isLeapYear2(2000) === true);
console.log(isLeapYear2(1900) === false);
console.log(isLeapYear2(1752) === true);
console.log(isLeapYear2(1700) === false);
console.log(isLeapYear2(1) === false);
console.log(isLeapYear2(100) === false);
console.log(isLeapYear2(400) === true);