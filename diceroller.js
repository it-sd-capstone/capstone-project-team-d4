// This is the JS file named, script.js for the project

console.log("Hello " + name + "! From the js file!");

document.write("Hello from the js file");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 150, 100);


function dice6() {
    // range for a 6 die
    let num = Math.floor(Math.random()*6)+1;
    return num;
}

function dice8() {
    // range for a 8 die
    let num = Math.floor(Math.random()*8)+1;
    return num;
}
    function displayNumber(){
        // 4  6 8 10 12 20
        // roll multiple of the dices in whatever combonation

        //input box of each combonation and how many 
        // rolling a 6 sided dice
        let result = dice6();
        console.log("You rolled a " + result);
    
        let resultElement = document.getElementById("result");
        resultElement.textContent = "You rolled a " + result;

        // add an if else statement, to separate each roll from each other. (if pressed, x will display only, else, if y is pressed, z will display only.)
        
        // rolling an 8 sided dice
        let result8 = dice8();
        console.log("You rolled a " + result);
    
        let resultElement8 = document.getElementById("result8");
        resultElement8.textContent = "You rolled a " + result8;


}
let rollButton = document.getElementById("rollButton6");
rollButton.addEventListener("click", displayNumber);

let rollButton8 = document.getElementById("rollButton8");
rollButton8.addEventListener("click", displayNumber);