const DEGREE = '\u00B0';

function dms(num) {
  num %= 360;

  if (num < 0) {
    num += 360;
  }

  let degrees;
  let minutes;
  let seconds;

  [degrees, num] = div1mod60(num);
  [minutes, num] = div1mod60(num);
  [seconds, num] = div1mod60(num);
  seconds = Math.round(seconds, 0);

  return `${degrees}${DEGREE}${pad(minutes)}'${pad(seconds)}"`;
}

let div1mod60 = (dividend) => [Math.floor(dividend / 1), dividend % 1 * 60];
let pad = num => num < 10 ? '0' + String(num) : String(num);

// All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");

console.log();

console.log(dms(-1) === `359°00'00"`);
console.log(dms(400) === `40°00'00"`);
console.log(dms(-40) === `320°00'00"`);
console.log(dms(-420) === `300°00'00"`);