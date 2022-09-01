// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //   let stringNumber = n.toString();
  //   let num = "";
  //   for (let i = stringNumber.length - 1; i >= 0; i--) {
  //     num += stringNumber[i];
  //   }
  //   let parsed;
  //   if (n < 0) {
  //     parsed = -parseInt(num);
  //   } else {
  //     parsed = parseInt(num);
  //   }
  //   return parsed;

  //Another way (Much more simplified)
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
