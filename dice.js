var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
var randomDiceImage = `dice${randomNumber1}.png`; //dice1.png
var randomImageSrc1 = `images/${randomDiceImage}`; //images/dice1.png-images/dice6.png
var img1 = document.querySelectorAll("img")[0]; // for selecting image-1
img1.setAttribute("src", randomImageSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc2 = `images/dice${randomNumber2}.png`;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSrc2);

//Player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins:";
}

//Player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins:";
}

//Draw
else {
  document.querySelector("h1").innerHTML = "😒Draw";
}
