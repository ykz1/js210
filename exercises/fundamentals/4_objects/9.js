function timeOfDay(minutes) {
  let output = new Date(2025, 11, 25, 0, minutes);
  console.log(`${pad(output.getHours())}:${pad(output.getMinutes())}`);
}

let pad = num => num < 10 ? '0' + String(num) : String(num);

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"