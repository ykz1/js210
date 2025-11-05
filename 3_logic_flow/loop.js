function hello(name) {
  console.log(`Hello ${name}!`);
}

function greetEveryone() {
  let names = ['Kyle', 'Jenny', 'Adrian']

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    hello(name);
    hi();
  }
}

greetEveryone();