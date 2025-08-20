// Bracket notation evaluates to a single character
console.log("abc"[0]);    // Output: a
console.log("abc"[1]);    // Output: b
console.log("abc"[2]);    // Output: c


// It works on variables too!
const message = 'Hello there!';

console.log(message[0]);  // Output: H
console.log(message[4]);  // Output: o
console.log(message[5]);  // Output: ???
console.log(message[11]); // Output: ???


// undefined is returned if the index is invalid
console.log(message[50]); // Output: undefined