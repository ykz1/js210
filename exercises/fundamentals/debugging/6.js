const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  let newSpecies;   // `var` variables have functional scope, which in this case is global scope. The value of of newSpecies remains with each iteration of the `for` loop, and so on indexes 1, 3, 5 (i.e. 'human', 'squirrel', 'dinosaur'), `newSpecies` would still reference the string from the previous iteration, and would be logged again. Fix by changing to `let`, which gives `newSpecies` block scope i.e. scoped to this block which exists only for each iteration of the `for` loop.

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}