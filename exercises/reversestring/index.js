// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // My attempt
  let combined = "";
  for (let i = str.length - 1; i >= 0; i--) {
    combined += str[i];
  }
  return combined;

  // 2nd
  // const team = [...str];
  // team.reverse();
  // return team.join("");

  //3rd
  // return str.split("").reduce((firstValue, lastValue) => {
  //   return lastValue + firstValue;
  // });
}

module.exports = reverse;
