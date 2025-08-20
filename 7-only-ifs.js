const isItHot = (temp) => {
  if (temp > 75) {
    console.log("Eh")
  }
  if (temp > 90) {
    console.log("Yes!")
  }
  if (temp > 100) {
    console.log("So Hot!")
  }
  if (temp <= 75) {
    console.log("Nah")
  }
}

isItHot(105);
// Output: ???