function getRandomNumber(max, min){
    return Math.floor(Math.random() * (max-min+1) + min)
}

var img1Clicked = false;
var img2Clicked = false;
var randomNumber1 = 0;
var randomNumber2 = 0;

document.querySelector(".img1").addEventListener("click", () => {
    randomNumber1 = getRandomNumber(6,1);
    img1Clicked = true;
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    checkWinner();
});

document.querySelector(".img2").addEventListener("click", () => {
    randomNumber2 = getRandomNumber(6,1);
    img2Clicked = true;
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
    checkWinner();
});

function checkWinner() {
    if (img1Clicked && img2Clicked) {
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerText = "Player 1 wins!";
            img1Clicked = false;
            img2Clicked = false;
        } else if (randomNumber2 > randomNumber1) {
            img1Clicked = false;
            img2Clicked = false;
            document.querySelector("h1").innerText = "Player 2 wins!";
        } else {
            document.querySelector("h1").innerText = "It's a draw!";
            img1Clicked = false;
            img2Clicked = false;
        }
    }
}
