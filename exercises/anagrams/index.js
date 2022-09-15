// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1, str2) {
  const word1 = buildMap(str1);
  const word2 = buildMap(str2);
  if (Object.keys(word1).length !== Object.keys(word2).length) {
    return false;
  }
  for (const key in word1) {
    if (word1[key] !== word2[key]) {
      return false;
    }
  }
  return true;
}
function buildMap(str) {
  const chars = {};
  for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char] += 1;
    }
  }
  return chars;

  //

  // const word1 = sortString(str1);
  // const word2 = sortString(str2);
  // return word1 === word2;

  // function sortString(str) {
  //   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  // }
}

module.exports = anagrams;
