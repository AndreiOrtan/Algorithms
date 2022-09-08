// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //   let vowels = "";
  //   let word = str.toLowerCase();
  //   for (let i = 0; i <= word.length; i++) {
  //     if (
  //       word[i] === "a" ||
  //       word[i] === "e" ||
  //       word[i] === "i" ||
  //       word[i] === "o" ||
  //       word[i] === "u"
  //     ) {
  //       vowels += word[i];
  //     }
  //   }
  //   return vowels.length;

  //includes approach
  let count = 0;
  const letters = ["a", "e", "i", "o", "u"];
  for (const char of str.toLowerCase()) {
    if (letters.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;
