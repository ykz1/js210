function triangle(num) {
  for (let i = 1; i <= num; i++) {
    let line = '';
    for (let j = 1; j <= num; j++) {
      line = (j <= i ? '*' : ' ') + line;
    }
    console.log(line);
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********