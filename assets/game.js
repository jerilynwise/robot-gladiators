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

//console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + "is at" + i + "index");
}

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

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

    //subtract the value of the 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' vaiable
    enemyHealth = enemyHealth - playerAttack;
    
    //log a resulting message to the console so we know that it worked
    console.log(
        playerName + "attacked" + enemyName + "." + enemyName +  "now has" + enemyHealth + "health remaining."
    );

    //check enemy;s health
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");
    }

    //award player money for winning 
    playerMoney = playerMoney + 20; 

    //leave loop if player is dead
    break;
    }else {
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
        window.alert (playerName + "still has" + playerHealth + "health left.");
    }
  }//end of while loop
}; // end of fight loop

//fight each enemy-robot by looping over them and fighting them one at a time 
for (var i = 0; i <enemyNames.length; i++) {
    //if player is still alive, keep fighting
    if (playerHealth > 0) {
        window.alert('Welcome to Robot Gladiators! Round' + (i +1));

        //pick new enemy to fight based on the index of enemyNames array
        var pickedEnemyName = enemyNames[i];

        //reset enemyHealth before starting a new fight
        enemyHealth = 50;

        //usedebugger to pause script from running and check what's going on at that moment in the code
        //debugger;

        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }

    //if the player isn't alive,stop the game
    else {
        window.alert ('You have lost your robot in battle! Game Over!');
    }

}







