let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

function checkGuess() {
  let userGuess = Number(document.getElementById("guessInput").value);
  let message = document.getElementById("message");
  let attempts = document.getElementById("attempts");

  if (!userGuess) {
    message.textContent = "⚠ Please enter a number!";
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = "🎉 Congratulations! You guessed it!";
    return;
  } 
  else if (userGuess > randomNumber) {
    message.textContent = "📉 Too high!";
  } 
  else {
    message.textContent = "📈 Too low!";
  }

  attemptsLeft--;
  attempts.textContent = attemptsLeft;

  if (attemptsLeft === 0) {
    message.textContent = "❌ Game Over! Number was " + randomNumber;
  }
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  document.getElementById("attempts").textContent = attemptsLeft;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
}