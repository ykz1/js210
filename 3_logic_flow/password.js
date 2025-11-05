const PASSWORD = 'password'

function login() {
  let attempt = 1;
  let rlSync = require('readline-sync');
  while (attempt <= 3) {
    let input = rlSync.question("What is the password: ");
    if (input === PASSWORD) {
      console.log('You have successfully logged in.');
      return;
    }
    attempt++;
  }
  console.log('You have been denied access.');
  return;
}

login();