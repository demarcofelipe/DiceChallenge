var dice1 = Math.floor(Math.random()*6 + 1);
var dice2 = Math.floor(Math.random()*6 + 1);


//Images
  if (dice1 === 1) {
    document.querySelector(".img1").setAttribute("src","images/dice1.png")
  }
  if (dice1 === 2) {
    document.querySelector(".img1").setAttribute("src","images/dice2.png")
  }
  if (dice1 === 3) {
    document.querySelector(".img1").setAttribute("src","images/dice3.png")
  }
  if (dice1 === 4) {
    document.querySelector(".img1").setAttribute("src","images/dice4.png")
  }
  if (dice1 === 5) {
    document.querySelector(".img1").setAttribute("src","images/dice5.png")
  }
  if (dice1 === 6) {
    document.querySelector(".img1").setAttribute("src","images/dice6.png")
  }

  if (dice2 === 1) {
    document.querySelector(".img2").setAttribute("src","images/dice1.png")
  }
  if (dice2 === 2) {
    document.querySelector(".img2").setAttribute("src","images/dice2.png")
  }
  if (dice2 === 3) {
    document.querySelector(".img2").setAttribute("src","images/dice3.png")
  }
  if (dice2 === 4) {
    document.querySelector(".img2").setAttribute("src","images/dice4.png")
  }
  if (dice2 === 5) {
    document.querySelector(".img2").setAttribute("src","images/dice5.png")
  }
  if (dice2 === 6) {
    document.querySelector(".img2").setAttribute("src","images/dice6.png")
  }


//Title

if(dice1>dice2){document.querySelector("h1").innerHTML="🚩Player 1 wins!"}
else { if (dice1===dice2){document.querySelector("h1").innerHTML="Draw!"}
else {document.querySelector("h1").innerHTML="Player 2 wins! 🚩"};
        }
