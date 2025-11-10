function swapName(str) {
  return str.split(' ')
            .reverse()
            .join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further exploration:

function swapName2(name) {
  let names = name.split(' ');
  return names.slice(-1) + ', ' + names.slice(0, -1).join(' ');
}

console.log(swapName2('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName2('Joe Joey Joel Roberts'));    // "Roberts, Joe Joey Joel"
