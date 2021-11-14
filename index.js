let firstCard = 4
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
  sumEl.textContent = "Sum: " + sum
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

function newCard() {
  console.log("Drawing a new card from the deck!")
  let card = 6
  sum += card
  startGame()
}