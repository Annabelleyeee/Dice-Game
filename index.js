console.log ('Welcome to this virtual Dice rolling game! \n\nYou will take turns rolling dice and the player with the larger number will win a point. \n\nThe first player to reach 20 points will win the game!\n\n');

//Setting the value of the players names.
let player1 = prompt('Player 1, Please enter your name:');
console.log ('Welcome, ' + player1 + '!');

let player2 = prompt('Player 2, Please enter your name:');
console.log ('Welcome, ' + player2 + '!');
console.log ('Let\'s Play!\n\nwhen it is your turn, please type \'roll\' to roll your dice');




play();

function play(){

//setting the round and points to 0
let round = 1;
let pointPlayer1 = 0;
let pointPlayer2 = 0;

//the variable 'diceRoll' will generate a random number between 1 and 6
let diceRoll1 = Math.floor(Math.random() * 6 + 1);
let diceRoll2 = Math.floor(Math.random() * 6 + 1);

do {
 let rollPlayer1 = prompt ('It\'s your turn' + player1 + ', are you ready to roll?');

    while (rollPlayer1 = 'roll') {
      let rollPlayer1 = diceroll1
      console.log ('You rolled a ' + rollPlayer1 + '!');
    }
}
}
