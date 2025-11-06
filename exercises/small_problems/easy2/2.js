function logInBox(str, max = 80) {
  let width = Math.min(str.length, max);

  let border = `+-${'-'.repeat(width)}-+`;
  let empty = `| ${' '.repeat(width)} |`;
  
  let words = str.split(' ');
  let lines = [];
  let line = '';
  words.forEach(word => {
    if ((line.length + 1 + word.length) <= width) {
      line += line === '' ? word : ' ' + word;
    } else {
      lines.push(line);
      line = word;
    }
  });
  lines.push(line);

  lines = lines.map(line => `| ${addPadding(line, width)} |`);

  lines = [border, empty, ...lines, empty, border]  // Combine output lines
  console.log(lines.join('\n'));
}
function addPadding(str, width) {
  let padding = ' '.repeat(width - str.length);
  return str + padding;
}
logInBox('To boldly go where no one has gone before.');
logInBox('To boldly go where no one has gone before.', 10);