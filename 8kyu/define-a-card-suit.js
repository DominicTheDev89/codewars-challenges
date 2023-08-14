// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// My solution

function defineSuit(card) {
    let suit = "";
    card.charAt(card.length - 1) === '♣' ? suit = 'clubs' : card.charAt(card.length - 1) === '♦' ? suit = 'diamonds' :
    card.charAt(card.length - 1) === '♥' ? suit = 'hearts' : suit = 'spades';
    return suit;
  }