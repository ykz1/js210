let myObj = {
  say: function (what) {
    console.log(`Saying: ${what}`);
  },
  question: what => console.log(`Questioning: ${what}?`),
  shout(what) {
    console.log(`Shouting: ${what}!`);
  },
}

myObj.say('something');
myObj.shout('something');
myObj.question('something');