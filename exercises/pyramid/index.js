// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, pyr = "") {
  //   const midpoint = Math.floor((2 * n - 1) / 2);
  //   for (let row = 0; row < n; row++) {
  //     let pyr = "";
  //     for (let col = 0; col < 2 * n - 1; col++) {
  //       if (midpoint - row <= col && midpoint + row >= col) {
  //         pyr += "#";
  //       } else {
  //         pyr += " ";
  //       }
  //     }

  //     console.log(pyr);
  //   }

  //recursive method
  const midpoint = Math.floor((2 * n - 1) / 2);
  if (n === row) {
    return;
  }
  if (pyr.length === 2 * n - 1) {
    console.log(pyr);
    return pyramid(n, row + 1);
  }
  if (midpoint - row <= pyr.length && midpoint + row >= pyr.length) {
    pyr += "#";
  } else {
    pyr += " ";
  }

  pyramid(n, row, pyr);
}

module.exports = pyramid;
