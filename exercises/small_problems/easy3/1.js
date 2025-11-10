let randBetween = (min, max) => Math.floor(Math.random() * (max - min + 1));

let teddy = _ => console.log(`Teddy is ${randBetween(20, 200)} years old!`);

teddy();

// Further exploration: Math.round would not produce a fully random, equal probability that each number is returned. Specifically, with round, the outer boundaries of 20 and 200 would have half the probability of occuring than other numbers within the range. 

// We can make the function more robust by taking two numbers and determining min and max by comparing their values.