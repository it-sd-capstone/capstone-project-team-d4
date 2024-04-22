// This is the JS file named, script.js for the project

console.log("Hello " + name + "! From the js file!");

document.write("Hello from the js file");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 150, 100);

function dice4() {
    // range for a 4 die
    let num = Math.floor(Math.random() * 4) + 1;
    return num;
}
function dice6() {
    // range for a 6 die
    let num = Math.floor(Math.random() * 6) + 1;
    return num;
}
function dice8() {
    // range for a 8 die
    let num = Math.floor(Math.random() * 8) + 1;
    return num;
}
function dice10() {
    // range for a 10 die
    let num = Math.floor(Math.random() * 10) + 1;
    return num;
}
function dice12() {
    // range for a 12 die
    let num = Math.floor(Math.random() * 12) + 1;
    return num;
}
function dice20() {
    // range for a 20 die
    let num = Math.floor(Math.random() * 20) + 1;
    return num;
}
function displayDice4() {
    // rolling an 8 sided dice
    let result4 = dice4();
    console.log("You rolled a " + result4);

    let resultElement4 = document.getElementById("result4");
    resultElement4.textContent = "You rolled a " + result4;
}
function displayDice6() {
    // roll multiple of the dices in whatever combonation

    //input box of each combonation and how many 
    // rolling a 6 sided dice
    let result6 = dice6();
    console.log("You rolled a " + result6);

    let resultElement6 = document.getElementById("result6");
    resultElement6.textContent = "You rolled a " + result6;

    // add an if else statement, to separate each roll from each other. (if pressed, x will display only, else, if y is pressed, z will display only.)
}
function displayDice8() {
    // rolling an 8 sided dice
    let result8 = dice8();
    console.log("You rolled a " + result8);

    let resultElement8 = document.getElementById("result8");
    resultElement8.textContent = "You rolled a " + result8;
}

function displayDice10() {
    // rolling an 8 sided dice
    let result10 = dice10();
    console.log("You rolled a " + result10);

    let resultElement10 = document.getElementById("result10");
    resultElement10.textContent = "You rolled a " + result10;
}

function displayDice12() {
    // rolling an 8 sided dice
    let result12 = dice12();
    console.log("You rolled a " + result12);

    let resultElement12 = document.getElementById("result12");
    resultElement12.textContent = "You rolled a " + result12;
}
function displayDice20() {
    // rolling an 8 sided dice
    let result20 = dice20();
    console.log("You rolled a " + result20);

    let resultElement20 = document.getElementById("result20");
    resultElement20.textContent = "You rolled a " + result20;
}

let rollButton4 = document.getElementById("rollButton4");
rollButton4.addEventListener("click", displayDice4);

let rollButton6 = document.getElementById("rollButton6");
rollButton6.addEventListener("click", displayDice6);

let rollButton8 = document.getElementById("rollButton8");
rollButton8.addEventListener("click", displayDice8);

let rollButton10 = document.getElementById("rollButton10");
rollButton10.addEventListener("click", displayDice10);

let rollButton12 = document.getElementById("rollButton12");
rollButton12.addEventListener("click", displayDice12);

let rollButton20 = document.getElementById("rollButton20");
rollButton20.addEventListener("click", displayDice20);

// make a for loop while counter where the roll loops up until the roller counter
// we want to roll a 6 sided dice 1 time, output append to the total 
// use a loop to roll multiple dice

// the value of the drop down box that has the number of dice
// will be used at the length for the "counter", and each time, you run through the loop it will add another dice to the roll.
// so display each roll/ the total of the rolls. goal is to run each roll.

let counter = 0;
for(i = 0; i < counter; i++){

}
