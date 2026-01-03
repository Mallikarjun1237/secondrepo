let dice = document.querySelector("#dice");
let resetButton = document.querySelector("#reset"); 
let message = document.querySelector("#message");
let score1 = document.querySelector("#player1");
let score2 = document.querySelector("#player2");
let plyrscr1 = 0;
let plyrscr2 = 0;
let chance = 1;
let gameOver = false;
function rolldice() {
    return Math.floor(Math.random() * 6) + 1;
}
function decide() {
    if (plyrscr1 >= 100) {
        message.innerText = "Player 1 Wins!";
        message.style.backgroundColor = "green";
        gameOver = true;
    } else if (plyrscr2 >= 100) {
        message.innerText = "Player 2 Wins!";
        message.style.backgroundColor = "green";
        gameOver = true;
    }
}
dice.addEventListener("click", () => {
    if (gameOver){
         return;
    }
    let ro = rolldice();
    if (chance === 1) {
        plyrscr1+=ro;
        score1.innerText = plyrscr1;
        chance = 2;
        message.innerText = "Player 2's Turn";
    } else {
        plyrscr2+=ro;
        score2.innerText = plyrscr2;
        chance = 1;
        message.innerText = "Player 1's Turn";
    }
    decide();
});
resetButton.addEventListener("click", () => {
    plyrscr1 = 0;
    plyrscr2 = 0;
    chance = 1;
    gameOver = false;
    score1.innerText = "0";
    score2.innerText = "0";
    message.innerText = "Game reset! Player 1 starts.";
    message.style.backgroundColor ="rgb(192, 182, 162)"
});