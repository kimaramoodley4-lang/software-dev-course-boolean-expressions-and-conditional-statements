/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let hasSword = false; 

console.log("You see two paths: one leads to the mountains, the other to the village.");

const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
    if (hasTorch) {
        console.log("You safely navigate through the dark mountains.");
        
        // Nested logic: An encounter inside the mountains
        const encounter = readline.question("A wild beast blocks your path! Do you 'fight' or 'run'? ");
        
        if (encounter === "fight" && hasSword) {
            console.log("You slay the beast with your sword and find a hidden treasure!");
        } else if (encounter === "fight" && !hasSword) {
            console.log("You have no weapon! You are forced to retreat.");
        } else {
            console.log("You safely run back to the start.");
        }
    } else {
        console.log("It's too dark to proceed. You decide to turn back.");
    }

} else if (choice === "village") {
    // Using the OR (||) operator
    if (hasMap || hasTorch) {
        console.log("You find your way to the village square.");
        
        const search = readline.question("The village is quiet. Do you 'search' the shop? ");
        if (search === "search") {
            hasSword = true; 
            console.log("You found a rusty sword! This might be useful later.");
        } else {
            console.log("You decide to keep walking.");
        }
    } else {
        console.log("You get lost and wander aimlessly.");
    }

} else {
    console.log("That wasn't an option. Game over.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/