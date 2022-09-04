// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  //   for (let i = 0; i < n; i++) {
  //     let step = "";
  //     for (let j = 0; j < n; j++) {
  //       if (i >= j) {
  //         step += "#";
  //       } else if (j > i) {
  //         step += " ";
  //       }
  //     }
  //     console.log(step);
  //   }

  //Recursion method
  if (n === row) {
    return;
  }
  if (stair.length === n) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

module.exports = steps;
