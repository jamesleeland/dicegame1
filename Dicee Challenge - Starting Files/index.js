function shake() {

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImgSrc = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

//player i Wins

if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 WINS!";

}
 else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 WINS! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "DRAW! Roll Again"
}
}
