// Okay - Use an If statement to choose which code block to execute
const isThisEven = (num) => {
  let message;
  if (num % 2 === 0) {
    message = 'it is even!';
  } else {
    message = 'it is odd!';
  }
  console.log(message);
}

// Challenge: Refactor the function above to use a ternary operator instead.