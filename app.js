//building blocks; the variables i'm going to need
const cards = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10] 
let playerHand = [];                                    
let compHand = [];                                      
let cardPlayed = [];                                    
let compScore = 0;
let playerScore = 0;

//variables to allow functions to manipulate the DOM
const compCardDrawn = document.querySelector("#compCardDrawn");
const playerCardDrawn = document.querySelector("#playerCardDrawn");
const compScoreDisplay = document.querySelector("#compScore");
const playerScoreDisplay = document.querySelector("#playerScore")
const modal = document.querySelector(".modal")
let modalHeader = document.querySelector(".modalheader")
const drawVisible = document.querySelector("#draw")

//functions for game play
const shuffleDeck = () => {
    for (let i = 0; i < 22; i++) {                         
        let tempCard = cards[i];                        
        let iRandom = Math.floor(Math.random() * 20);    
        cards[i] = cards[iRandom];                       
        cards[iRandom] = tempCard                        
    }
    console.log("shuffled deck " + cards);
    dealCards()
    drawVisible.style.display = "block";
}

// shuffleDeck(cards);                                      

const dealCards = () => {                                       
    playerHand = [...cards.slice(0, 10)]
    console.log("player's hand " + playerHand)
    compHand = [...cards.slice(10, 20)]
    console.log("computer hand " + compHand)
}

const drawCard = () => {
    if (compHand.length > 0 && playerHand.length > 0) {
        cardPlayed.unshift(compHand[0]);                       
        compHand.shift();                                     
        cardPlayed.unshift(playerHand[0]);
        playerHand.shift();
        console.log(cardPlayed);
        console.log("new Comp Hand" + compHand);
        compCardDrawn.innerHTML = cardPlayed[0];               
        console.log("new Player Hand" + playerHand);
        playerCardDrawn.innerHTML = cardPlayed[1];
        takeScore()
    }
    console.log(playerHand);
    console.log(compHand);
    console.log(compHand.length);
    if (compHand.length == 0 && compScore > playerScore) {
        // console.log("GAME OVER!! You Lose!");
        modal.style.display = "block";
        modalHeader.innerHTML = "GAME OVER!! You Lose!"
    }
    if (compHand.length == 0 && compScore < playerScore) {
        // console.log("YOU WIN!!!");
        modal.style.display = "block";
        modalHeader.innerHTML = "YOU WIN!!!"
    }
    if (compHand.length == 0 && compScore == playerScore) {
        // console.log("IT'S A TIE!!");
        modal.style.display = "block";
        modalHeader.innerHTML = "IT'S A TIE!!"
    }
}

// drawCard()  

let takeScore = () => {
    if (cardPlayed[0] > cardPlayed[1]) {                                      
        compScore += 1;                                                      
        console.log("new computer score " + compScore);
        compScoreDisplay.innerHTML = compScore
    }
    else if (cardPlayed[0] < cardPlayed[1]) {
        playerScore += 1;
        console.log("new player score " + playerScore);
        playerScoreDisplay.innerHTML = playerScore
    }
    else if (cardPlayed[0] == cardPlayed[1] && compScore > playerScore) {
        compScore -= 1;
        console.log("Looks like you're catching up")
    }
    else if (cardPlayed[0] == cardPlayed[1] && compScore < playerScore) {
        playerScore -= 1;
        console.log("You're losing ground.")
    }
}

//takeScore()