

document.getElementById('guess').addEventListener('click', function () {
    const RandomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const userGuess = parseInt(document.getElementById('val').value);
  const res = document.getElementById('res');

  if (isNaN(userGuess)) {
    res.textContent = "Please enter a number!";
    return;
  }

  if (userGuess < RandomNumber) {
    res.textContent = "Too low! Try again!";
  } else if (userGuess > RandomNumber) {
    res.textContent = "Too high! Try again!";
  } else {
    res.textContent = "Bravo! You guessed it!";
  }
});