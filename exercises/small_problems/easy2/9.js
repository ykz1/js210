let cleanUp = str => str.replace(/[^a-z]+/gi, ' ');

console.log(cleanUp("---what's my +*& line?") === " what s my line ");