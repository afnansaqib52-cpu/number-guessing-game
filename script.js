let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

function checkGuess() {
  let userGuess = Number(document.getElementById("guessInput").value);
  let message = document.getElementById("message");
  let attempts = document.getElementById("attempts");

  if (!userGuess) {
    message.textContent = "⚠ Please enter a number!";
    message.style.color = "orange";
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = "🎉 Congratulations! You guessed it!";
    message.style.color = "green";
    document.getElementById("guessInput").disabled = true;
    return;
  } else if (userGuess > randomNumber) {
    message.textContent = "📉 Too high! Try lower.";
    message.style.color = "#e74c3c";
  } else {
    message.textContent = "📈 Too low! Try higher.";
    message.style.color = "#3498db";
  }

  attemptsLeft--;
  attempts.textContent = attemptsLeft;

  if (attemptsLeft === 0) {
    message.textContent = "❌ Game Over! Number was " + randomNumber;
    message.style.color = "red";
    document.getElementById("guessInput").disabled = true;
  }
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  document.getElementById("attempts").textContent = attemptsLeft;
  document.getElementById("message").textContent = "";
  document.getElementById("message").style.color = "#333";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
}
