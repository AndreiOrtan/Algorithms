// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, "m"];
  const counters = [0];
  while (arr.length > 1) {
    const dummyArr = arr.shift();
    if (dummyArr === "m") {
      arr.push("m");
      counters.push(0);
    }
    if (dummyArr.children) {
      counters[counters.length - 1]++;
      arr.push(...dummyArr.children);
    }
  }
  return counters;
}

module.exports = levelWidth;
