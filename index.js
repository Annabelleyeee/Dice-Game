console.log ('Welcome to this virtual Dice rolling game! \n\nYou will take turns rolling dice and the player with the larger number will win a point. \n\nThe first player to reach 20 points will win the game!\n\n');

//Setting the value of the players names.
let player1 = prompt('Player 1, Please enter your name:');
console.log ('Welcome, ' + player1 + '!');

let player2 = prompt('Player 2, Please enter your name:');
console.log ('Welcome, ' + player2 + '!');
console.log ('Let\'s Play!');

play();
function play() {
//dice = [1, 2, 3, 4, 5, 6];
//let length = dice.length;

//the variable 'diceRoll' will generate a random number between 1 and 6
let roll1 = Math.floor(Math.random() * 6 + 1);
//number1= (dice[roll1]);
let roll2 = Math.floor(Math.random() * 6 + 1);
//number2= (dice[roll2]);


//setting the round and points to 0
let round = 1;
let pointPlayer1 = 0;
let pointPlayer2 = 0;

do {

while (round <= 20){
  var rollPlayer1 = prompt('It\'s your turn ' + player1 + ', are you ready to roll? yes or no?');

    if (rollPlayer1 == 'roll' || rollPlayer1 == 'yes' ) {
      console.log ('You rolled a ' + roll1 + '!');
    } else if (rollPlayer1 == 'no'){
      console.log ('Ok, thank you for playing!');
    }

  var rollPlayer2 = prompt('It\'s your turn ' + player2 + ', are you ready to roll? yes or no?');

    if (rollPlayer2 == 'roll' || rollPlayer2 == 'yes' ) {
      console.log ('You rolled a ' + roll2 + '!');
    } else if (rollPlayer2 == 'no'){
      break;
      
    } 
    
     if (roll1 > roll2){
       console.log('Congradulations! ' + player1 + ' you get a point');
        pointPlayer1++;
        round++

      } else if (roll1 < roll2){
        console.log('Congradulations! ' + player2 + ' you get a point');
        pointPlayer2++;
        round++

      }
  } 
}



  
      while  (round <= 20) {

     }
console.log (player1 + ', you have' + pointPlayer1 + '  points');
console.log (player2 + ', you have' + pointPlayer2 + '  points')

if (pointPlayer1 > pointPlayer2){
  console.log ('Congradulations ' + player1 + ' you win')
} else if (pointPlayer1 < pointPlayer2){
  console.log ('Congradulations ' + player2 + ' you win')
}

  
 let again = prompt ('Do you want to start again?');
    
  if (again =='yes') {
    play();
  } else{
	console.log('Game Over! Thank you for playing!');
}
        

  
}



