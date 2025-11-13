const totalPages = 364;
let energy = 100;
let currentPage = 1;    // This line needs to be moved outside of the `read()` function. Previously, each time we read, we restart at page 1, and we also drink a coffee every time we read and re-start our reading (recursively read and read and read...). This means that we're in an endless loop of reading, drinking coffee to refresh energy, then restarting reading from page 1, etc. We only ever get to page 18 with a full bar of energy, and so we never exit this loop.

function read() {

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();