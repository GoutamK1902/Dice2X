let imgArray = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

let refreshButton = document.querySelector("h1");

let dice1 = document.querySelector("#dice1");
let dice2 = document.querySelector("#dice2");

refreshButton.addEventListener("click", () => {
  gameOn();
});

function gameOn() {
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
}

// Optional: Initialize the dice images when the page loads
window.onload = gameOn;
