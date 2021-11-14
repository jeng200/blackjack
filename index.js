let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

function startGame(){
  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    let hasBlackJack = false
  } else {
    message = "Oh, no! You're out of the game."
    let isAlive = false
  }
  messageEl.textContent = message
}