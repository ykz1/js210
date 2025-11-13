function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx];                                // Need to return explicitly
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);   // Don't need to do this, can access args like a regular array

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting();              // Need to invoke `randomGreeting` with `()`, otherwise will return function rather than call it

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');