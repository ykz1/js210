// Further exploration:

let rlSync = require('readline-sync');

function getScores(count) {
  let output = [];
  for (let i = 1; i <= count; i++) {
    output.push(parseInt(rlSync.question(`Enter score ${i}: `)));
  }
  return output;
}

function computeAverage(arr) {
  return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}

function computeGPA(average) {
  if (average >= 90) {
    return 'A';
  } else if (average >= 70) {
    return 'B';
  } else if (average >= 50) {
    return 'C';
  } else {
    return 'F';
  }
}

let countGrades = rlSync.question('How many grades are you entering? ');
let scores = getScores(countGrades);
let average = computeAverage(scores);
let grade = computeGPA(average);
console.log(`Based on ${countGrades} entered, your average is ${average} and your GPA is ${grade}.`);