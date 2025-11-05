function substring(string, start, end) {
  // Requirements
  // - larger is end, smaller is start
  // - larger equal smaller -> return empty string ''
  // - no end, assume end is end of string
  // - less than 0 or not integer --> assume 0
  // - greater than string length, treat as string length

  let lastIndex = string.length;

  if (end === undefined)                        end = lastIndex;
  if (!Number.isInteger(start) || start < 0)    start = 0;
  if (!Number.isInteger(end) || end < 0)        end = 0;
  if (start > end)                              [start, end] = [end, start];
  start = Math.min(lastIndex, start);
  end   = Math.min(lastIndex, end);

  let output = '';
  for (let i = start; i < end; i++) {
    output += string[i];
  }
  console.log(output);

}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"