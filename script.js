let timeoutActive = false;

refreshButton.addEventListener("click", () => {
  if (!timeoutActive) {
    gameOn();
  }
});

function gameOn() {
  // Set timeout active
  timeoutActive = true;

  let m = Math.floor(Math.random() * 6);
  let n = Math.floor(Math.random() * 6);
  let attributeValue1 = imgArray[m];
  let attributeValue2 = imgArray[n];
  dice1.setAttribute("src", attributeValue1);
  dice2.setAttribute("src", attributeValue2);
  if (m > n) {
    refreshButton.textContent = "Player 1 Wins!";
  } else if (n > m) {
    refreshButton.textContent = "Player 2 Wins!";
  } else {
    refreshButton.textContent = "It's a Tie";
  }

  // Set timeout to revert the text back to default after 2 seconds
  setTimeout(() => {
    refreshButton.textContent = "Play Again";
    // Reset timeout active
    timeoutActive = false;
  }, 3000);
}
