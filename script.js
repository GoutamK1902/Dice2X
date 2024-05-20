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
let m = Math.floor(Math.random() * 6);
let n = Math.floor(Math.random() * 6);
let attributeValue1 = imgArray[m];
let attributeValue2 = imgArray[n];

refreshButton.addEventListener("click", () => {
  window.location.reload(true);
});
function gameOn() {
  dice1.removeAttribute("src");
  dice1.setAttribute("src", attributeValue1);
  dice2.removeAttribute("src");
  dice2.setAttribute("src", attributeValue2);
}
window.onload = gameOn;
