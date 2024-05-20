const imgArray = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

const refreshButton = document.querySelector("h1");
const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");

refreshButton.addEventListener("click", gameOn);

function gameOn() {
  const m = Math.floor(Math.random() * 6);
  const n = Math.floor(Math.random() * 6);
  dice1.setAttribute("src", imgArray[m]);
  dice2.setAttribute("src", imgArray[n]);
  refreshButton.textContent =
    m > n ? "Player 1 Wins!" : n > m ? "Player 2 Wins!" : "It's a Tie";

  setTimeout(() => {
    refreshButton.textContent = "Play Again";
  }, 3000);
}
