let firstCard = getRandomCard()
let secondCard = getRandomCard()
let hasBlackjack = false
let isAlive = true
// array for storing cards
let cards = [
    firstCard,
    secondCard
]

let sum = firstCard + secondCard

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// function generates a random number
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()* 11) + 1
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
    renderGame()
}

function renderGame(){
cardsEl.textContent = "Cards :"       // JS removes the default text written on the html
sumEl.textContent = "Sum: " + sum

for (let i=0; i< cards.length; i++){
    cardsEl.textContent += cards[i]
}

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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}