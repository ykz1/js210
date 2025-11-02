if (condition1) {
  // block1
  if (condition2) {
    // block2
  } else {
    // block3
  }
} else {
  // block4
  if (condition4) {
    // block5
    if (condition5) {
    // block6
    }
  }
}

/*
5 paths are :
- block1 + block2
- block1 + block3
- block4
- block4 + block5
- block4 + block5 + block6
*/