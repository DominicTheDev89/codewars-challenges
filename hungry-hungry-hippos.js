// You're playing a game of Hungry Hungry Hippos with 3 other people. Every round, player 0 will eat 3 pellets, player 1 will eat 4 pellets, 
// player 2 will eat 6 pellets, and player 3 will eat 1 pellet, in that order. The game ends when there are 0 pellets left.

// Write a method that takes in the starting number of pellets, and return an array containing which turn the game ends on, and which player 
// eats the last pellet.

// **Example**


// hippo(1) => [1, 0]
// hippo(9) => [1, 2]
// hippo(19) => [2, 1]

// My solution

function hippo(numPellets) {
  let answer = [];
  let turn = 0;
  let playArray = [0,1,2,3]
  
  while(numPellets > 0){
    if(numPellets - 3 <= 0){
      turn++;
      answer.push(turn)
      answer.push(playArray[0])
      break;
    }
    if(numPellets - 7 <= 0){
      turn ++;
      answer.push(turn);
      answer.push(playArray[1]);
      break;
    }
    if(numPellets - 13 <= 0){
      turn ++;
      answer.push(turn);
      answer.push(playArray[2]);
      break;
    }
    if(numPellets - 14 <= 0){
      turn ++;
      answer.push(turn);
      answer.push(playArray[3]);
      break;
    }
    turn++;
    numPellets -= 14;
  }

  return answer;
}