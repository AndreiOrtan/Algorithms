// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let arr1 = [];
  let startColumn = 0;
  let startRow = 0;
  let counter = 1;
  let endRow = n - 1;
  let endColumn = n - 1;
  for (let i = 0; i < n; i++) {
    arr1.push([]);
  }

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      arr1[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      arr1[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      arr1[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      arr1[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return arr1;
}

module.exports = matrix;
