function afterMidnight(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3, 5));

  minutes += hours * 60;

  return minutes;
}

function beforeMidnight(time) {
  minutes = afterMidnight(time);
  minutes = 60 * 24 - minutes;
  minutes %= 60 * 24;
  return minutes;
}



console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686