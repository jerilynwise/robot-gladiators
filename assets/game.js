//robot name 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//log
console.log(playerName,playerAttack,playerHealth);

var enemyNames= ["Roborto", "Amy Andriod","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight function with the parameter for the enemy's name

var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0){

    //prompt to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? 'FIGHT' or 'SKIP' to choose.");

    //if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP"){
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

     //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + "has decided to skip this fight. Goodbye!");
            
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
        }
    }

    //subtract the value of the 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' vaiable
    enemyHealth = enemyHealth - playerAttack;
    
    //log a resulting message to the console so we know that it worked
    console.log(
        playerName + "attacked" + enemyName + "." + enemyName +  "now has" + enemyHealth + "health remaining."
    );

    //check enemy;s health
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");

    //award player money for winning 
    playerMoney = playerMoney + 20; 

    //leave loop if player is dead
    break;
    } else {
        window.alert(enemyName + "still has" + enemyHealth + "health left.");
    }

    //subtract the value of 'enemyAttack' from the value of 'playerHelath' and use that
    //result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;

    //log a resulting message to the console so we know that it worked
    console.log(
        enemyName + "attakced" +playerName + "." + "playerName" + "now has" +playerHealth + "health remaining."
    )

    //check players health
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    

    //leave loop is player is dead
    break;
    }else {
        window.alert (playerName + 'still has'+ playerHealth + 'health left.');
    }
  }//end of while loop
}; // end of fight loop

var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

//fight each enemy-robot by looping over them and fighting them one at a time 
for (var i = 0; i <enemyNames.length; i++) {
    //if player is still alive, keep fighting
    if (playerHealth > 0) {
        window.alert('Welcome to Robot Gladiators! Round' + (i +1));

        //pick new enemy to fight based on the index of enemyNames array
        var pickedEnemyName = enemyNames[i];

        //reset enemyHealth before starting a new fight
        enemyHealth = 50;

        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);



        if (playerHealth > 0 && i < enemyNames.length -1) {
            //ask if player wants to use the store before next round
            var storeConfirm = window.confirm ("The fight is over, visit the store before the next round?");

            //if yes, take them to the store() function
            if (storeConfirm) {
                shop();
            }
        }
    }

    //if the player isn't alive,stop the game
    else {
        window.alert ('You have lost your robot in battle! Game Over!');
        break;
    }
  }

  //after loops ends, we are either out of playerHealth 
  endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
  
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + '.');
    } else {
      window.alert("You've lost your robot in battle!");
    }
  
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm('Would you like to play again?');
  
    if (playAgainConfirm) {
      startGame();
    } else {
      window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
  };
  
  // go to shop between battles function
  var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );
  
    // use switch case to carry out action
    switch (shopOptionPrompt) {
      case 'REFILL':
      case 'refill':
        if (playerMoney >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
  
          // increase health and decrease money
          playerHealth = playerHealth + 20;
          playerMoney = playerMoney - 7;
      }
      else {
          window.alert("You don't have enough money!");
      }
        break;
      case 'UPGRADE':
      case 'upgrade':
        if (playerMoney >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
          // increase attack and decrease money
          playerAttack = playerAttack + 6;
          playerMoney = playerMoney - 7;
      }
      else {
          window.alert("You don't have enough money!");
      }
        break;
      case 'LEAVE':
      case 'leave':
        window.alert('Leaving the store.');
  
        // do nothing, so function will end
        break;
      default:
        window.alert('You did not pick a valid option. Try again.');
  
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
  };
  
  // start first game when page loads
  startGame();
  






