// GLOBAL variables
let sum = 0
let message = ""

//boolean variables
let hasBlackjack = false
let isAlive = false

// empty array for storing cards when we push them into the list
let cards = []

//fetching elements from our html using their id's
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

//initialising the players details
//creating player object
let player = {
    name : "Phume",
    chips : 145
}

//outputting the player details 
playerEl.textContent = player.name + " : R" + player.chips // accesing object values using keys

// function generates a random number
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()* 13) + 1
    if(randomNumber === 1){
        return 11
    } else if(randomNumber > 9){
        return 10
    } else{
        return randomNumber
    }
}

// this function is called by the start game click on the html
function startGame(){

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    // stores cards in an array to allow traversing later on
    cards = [
        firstCard,
        secondCard
    ]

    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
cardsEl.textContent = "Cards :"       // JS removes the default text written on the html
//traverses the entire array 
for (let i=0; i< cards.length; i++){
    cardsEl.textContent += cards[i] + " "
}

sumEl.textContent = "Sum: " + sum

    if (sum <21 ){
        message = "Do you want to draw a new card?"
    }
    else if (sum ===21){
        message ="Wooop woop you win"
        hasBlackjack = true
        resetGame()  //game resets when you win
    }
    else {
        message= "You're out"
        isAlive = false
        player.chips -= 10  // deducts chips when you lose
        playerEl.textContent = player.name + " : R" + player.chips
        resetGame()
    }

    messageEl.textContent = message
}

// called when you click on the NEW CARD button according to html
function newCard(){
    if(isAlive === true && hasBlackjack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    } else {
        resetGame()
    }
}

//function to reset the game when you lose or when you get blackjack
function resetGame() {
    sum=0
    cards = []
    hasBlackjack = false
    isAlive = false
    messageEl.textContent = " Want to play another round?"
    cardsEl.textContent = "Cards :"
    sumEl.textContent = "Sum :"
}