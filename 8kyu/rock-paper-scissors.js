// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// My solution

const rps = (p1, p2) => {
    const r = "rock";
    const p = "paper";
    const s = "scissors";
    
    if ((p1 == r && p2 == p) || (p1 == p && p2 == s) || (p1 == s && p2 == r)){
      return "Player 2 won!";
    } else if ((p2 == r && p1 == p) || (p2 == p && p1 == s) || (p2 == s && p1 == r)) {
      return "Player 1 won!"
    } else {
      return "Draw!";
    }
  };