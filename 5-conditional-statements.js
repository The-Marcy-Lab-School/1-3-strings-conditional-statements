const isItHot = (temp) => {
  if (temp > 100) {
    console.log("So Hot!")
  } else if (temp > 90) {
    console.log("Yes!")
  } else if (temp > 75) {
    console.log("Eh")
  } else {
    console.log("Nah")
  }
}
isItHot(80);
// Output: Eh

isItHot(95);
// Output: Yes!

isItHot(105);
// Output: So Hot!

isItHot(60);
// Output: Nah