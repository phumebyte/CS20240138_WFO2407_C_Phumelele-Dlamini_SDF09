let firstCard = 6
let secondCard = 9
let hasBlackjack = false
let isAlive = true

let sum = firstCard + secondCard

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
sumEl.textContent = "Sum: " + sum

    if (sum <21 ){
        message = "Do you want to draw a new card?"
    }
    else if (sum ===21){
        message ="Wooop woop you win"
        hasBlackjack = true
    }
    else {
        message= "You're out"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){
    messageEl.textContent = "Drawing a new card from the deck"
    let card = 7
    sum += card
    renderGame()
}