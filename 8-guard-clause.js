const isItHot = (temp) => {
  if (temp > 75) {
    return "Eh";
  }
  if (temp > 90) {
    return "Yes!";
  }
  if (temp > 100) {
    return "So Hot!";
  }
  return "Nah";
}

console.log(isItHot(105));
// Output: ???