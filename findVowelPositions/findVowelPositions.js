function findVowelPositions(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
      if ('aeiou'.includes(s[i].toLowerCase())) {
          arr.push(i);
      }
  }
  return arr;
}

module.exports = { findVowelPositions };