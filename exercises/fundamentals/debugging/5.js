const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);  // note: does not accept $

  if (Number.isNaN(numericalData)) {      // Note: isNaN only catches `NaN`
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch(error) {     // We need to pass a variable `error` to `catch` in order to save the error that is caught.
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());