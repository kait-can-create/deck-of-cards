const deck = []

const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs']

const ranks = [
  'Ace',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Jack',
  'Queen',
  'King'
]

// deck[0] = ranks[0] + ' of ' + suits[0]

// deck.push(ranks[0] + ' of ' + suits[0])

// console.log(deck[0])

const main = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(ranks[j] + ' of ' + suits[i])
    }
  }
  showNoOfCards()
  shuffleDeck()
  for (let i = 0; i < deck.length; i++) {
    console.log(i + ': ' + deck[i])
  }
}

const shuffleDeck = () => {
  let temp
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
}

const showNoOfCards = () => {
  document.querySelector('.number-of-cards').textContent = deck.length
}

const showTopCard = () => {
  // for (let i = 0; i < deck.length; i++) {
  //   console.log(i + ': ' + deck[i])
  // }
  document.querySelector('.top-card').textContent = deck.splice(
    deck.length - 1,
    1
  )[0]
  showNoOfCards()
}

document.querySelector('.top-card').textContent = document
  .querySelector('.deal-new-card')
  .addEventListener('click', showTopCard)

document.addEventListener('DOMContentLoaded', main)
