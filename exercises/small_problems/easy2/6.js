const rls = require('readline-sync');

function playMadlib() {
  let noun = rls.question('Enter a noun: ');
  let verb = rls.question('Enter a verb: ');
  let adjective = rls.question('Enter an adjective: ');
  let adverb = rls.question('Enter an adverb: ');

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
}

playMadlib();
/*
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
*/