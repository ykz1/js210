let rlSync = require('readline-sync');

let score1 = parseInt(rlSync.question('Enter score 1: '));
let score2 = parseInt(rlSync.question('Enter score 2: '));
let score3 = parseInt(rlSync.question('Enter score 3: '));

let average = (score1 + score2 + score3) / 3;

let gpa;

if (average >= 90) {
  gpa = 'A';
} else if (average >= 70) {
  gpa = 'B';
} else if (average >= 50) {
  gpa = 'C';
} else {
  gpa = 'F';
}

console.log(`Based on the average of your 3 scores of ${average}, your letter grade is "${gpa}"`);