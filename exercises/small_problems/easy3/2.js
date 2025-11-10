let rls = require('readline-sync');

let nums = [];
for (let num of ['1st', '2nd', '3rd', '4th', '5th', 'last']) {
  nums.push(rls.question(`Enter the ${num} number: `))
}
let num = nums.pop();

console.log(`The number ${num} ${nums.includes(num) ? 'appears' : 'does not appear'} in [${nums.join(', ')}]`);