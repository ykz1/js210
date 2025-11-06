function century(num) {
  let output = String(Math.ceil(num / 100));
  if (output.length >= 2 && output.slice(-2, -1) === '1') return output + 'th';
  switch (output.slice(-1)) {
    case '1':
      return output + 'st';
    case '2':
      return output + 'nd';
    case '3':
      return output + 'rd';
    default:
      return output + 'th';
  }
}

console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");