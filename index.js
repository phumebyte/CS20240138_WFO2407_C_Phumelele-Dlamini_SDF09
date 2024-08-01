// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 6
let secondCard = 9
let hasBlackjack = false

let sum = firstCard + secondCard

function startGame(){
    if (sum <21 ){
        console.log("Do you want to draw a new card?")
    }
    else if (sum ===21){
        console.log("Wooop woop you win")
        hasBlackjack = true
    }
    else {
        console.log("You're out")
    }
}