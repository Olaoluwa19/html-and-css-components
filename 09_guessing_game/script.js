// Get DOM elements
const input = document.querySelector("input");
const message = document.querySelector(".message");
const checkButton = document.querySelector("button");
const chancesLeft = document.querySelector(".chances");

let randomNum;
let chances = 10;

// Function to generate new random number and reset game
function resetGame() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  chances = 10;

  console.log("New secret number:", randomNum);

  // Reset UI
  input.value = "";
  input.disabled = false;
  checkButton.disabled = false;
  checkButton.textContent = "Check";
  chancesLeft.textContent = chances;
  message.textContent = "Make your guess!";
  message.style.color = "#333";

  input.focus();
}

// Initialize game
resetGame();

// Listen for click event on the button
checkButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Handle Replay
  if (checkButton.textContent === "Replay") {
    resetGame();
    return;
  }

  const userGuess = parseInt(input.value);

  // Input validation
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100";
    message.style.color = "red";
    return;
  }

  // Decrement chances
  chances--;
  chancesLeft.textContent = chances;

  // Main game logic
  if (userGuess === randomNum) {
    message.textContent = "🎉 Congratulations, You guessed right!";
    message.style.color = "green";
    checkButton.textContent = "Replay";
    input.disabled = true;
  } else if (chances === 0) {
    // Game Over
    message.textContent = `💀 Game Over! The number was ${randomNum}`;
    message.style.color = "red";
    checkButton.textContent = "Replay";
    input.disabled = true;
    checkButton.disabled = true;
  } else if (userGuess > randomNum) {
    message.textContent = "Your guess is high";
    message.style.color = "#333";
  } else {
    message.textContent = "Your guess is Low";
    message.style.color = "#333";
  }

  // Clear input and refocus
  input.value = "";
  input.focus();
});
