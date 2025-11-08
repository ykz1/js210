// Q1
let today = new Date();
console.log(today);

// Q2
console.log(`Today's day is ${today.getDay()}`)

// Q3
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let todayDay = daysOfWeek[today.getDay()];
console.log(`Today is ${todayDay}`);

// Q4
let todayDate = today.getDate();
console.log(`Today is ${todayDay} the ${todayDate}`)

// Q5
let dateSuffix = dayOfMonth => {
  const first = Math.round(dayOfMonth / 10);
  const second = dayOfMonth % 10;
  if (first === 1) return 'th';
  if (second === 1) return 'st';
  if (second === 2) return 'nd';
  if (second === 3) return 'rd';
  return 'th';
}
for (let i = 1; i <= 31; i++) console.log(`${i}${dateSuffix(i)}`);
let todayDateth = `${todayDate}${dateSuffix(todayDate)}`

// Q6
console.log(`Today is ${todayDay}, ${today.getMonth()} the ${todayDate}${dateSuffix(todayDate)}.`)

// Q7
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let todayMonth = months[today.getMonth()];
console.log(`Today is ${todayDay}, ${todayMonth} the ${todayDateth}.`)

// Q8
function formattedMonth(date = new Date()) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date = new Date()) {
  const day = date.getDate();
  return `${day}${dateSuffix(day)}`;
}

let formattedDate = _ => console.log(`Today is ${todayDay}, ${formattedMonth()} the ${formattedDay()}`)

formattedDate();

// Q9
console.log(today.getFullYear());
console.log(today.getYear());     // current year minus 1900 for a 2-digit year 

// Q10
console.log(today.getTime());

// Q11
today = new Date();
let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

console.log(today);
console.log(tomorrow);

// Q12
// Not equal because they are actually different objects even though they have the same value
let nextWeek = new Date(today.getTime());
console.log(nextWeek === today);

// Q13

console.log(nextWeek.toDateString() === today.toDateString());
console.log(nextWeek.toDateString());

// Q14
let pad = int => int < 10 ? '0' + String(int) : String(int);
let formatTime = date => console.log(`${pad(date.getHours())}:${pad(date.getMinutes())}`);
formatTime(new Date());