// Q1
let rlSync = require('readline-sync');
let name = rlSync.prompt("What's your name?");
console.log(`Hello, ${name}`);

// Q2
// let rlSync = require('readline-sync');
let f_name = rlSync.prompt("What's your first name?");
let l_name = rlSync.prompt("What's your last name?");
console.log(`Hello, ${f_name} ${l_name}`);

// Q3
// let rlSync = require('readline-sync');
let age = Number(rlSync.prompt("What's your first name?"));
console.log(`You are ${age} years old.`);
console.log(`In 10 yars, you will be ${age + 10} years old.`);
console.log(`In 20 yars, you will be ${age + 20} years old.`);
console.log(`In 30 yars, you will be ${age + 30} years old.`);
console.log(`In 40 yars, you will be ${age + 40} years old.`);

