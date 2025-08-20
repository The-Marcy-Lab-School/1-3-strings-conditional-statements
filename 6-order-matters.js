const isItHot = (temp) => {
  if (temp > 75) {
    console.log("Eh")
  } else if (temp > 90) {
    console.log("Yes!")
  } else if (temp > 100) {
    console.log("So Hot!")
  } else {
    console.log("Nah")
  }
}
isItHot(80);
// Output: ???

isItHot(95);
// Output: ???

isItHot(105);
// Output: ???

isItHot(60);
// Output: ???