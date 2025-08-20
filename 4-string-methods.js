const fruits = 'apples, bananas, cherries';

// These return a boolean

console.log(fruits.includes('ana'))
// Output: true

console.log(fruits.includes('ANA'))
// Output: false

console.log(fruits.startsWith('apple'))
// Output: true

console.log(fruits.endsWith('s'))
// Output: true



// These return an index number (or -1 if not found)

console.log(fruits.indexOf('p'))
// Output: 1

console.log(fruits.lastIndexOf('p'))
// Output: 2

console.log(fruits.indexOf('z'))
// Output: -1



// These methods can be used in clever ways!
const hasOnlyOne = (str, letter) => {
  return str.indexOf(letter) === str.lastIndexOf(letter);
}
console.log(hasOnlyOne('hello', 'h'))
// Output: true

console.log(hasOnlyOne('hello', 'l'))
// Output: false



// These return a copy of the string modified in some way

const apples = fruits.slice(0, 6);
console.log(apples);
// Output: apples

const loudFruits = fruits.toUpperCase()
console.log(loudFruits);
// Output: APPLES, BANANAS, CHERRIES

console.log(apples.repeat(3));
// Output: applesapplesapples

console.log(apples.replace('p', 'g'));
// Output: agples

console.log(apples.replaceAll('p', 'g'));
// Output: aggles
