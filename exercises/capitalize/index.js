// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let newAr = [];
  for (const el of str.split(" ")) {
    newAr.push(el[0].toUpperCase() + el.slice(1));
  }
  return newAr.join(" ");

  //2nd method
  // let word = str[0].toUpperCase();
  // for (let i = 1; i < str.length; i++) {
  //   if (str[i - 1] === " ") {
  //     word += str[i].toUpperCase();
  //   } else {
  //     word += str[i];
  //   }
  // }
  // return word;
}

module.exports = capitalize;
