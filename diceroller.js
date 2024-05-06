// This is the JS file named, script.js for the project

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 150, 100);

// create a custom dice roller for two different dice faces with x number of dice roll for each dice face variation in one roll.

function rollDice4(){  
    let numOfDice = document.getElementById("numOfDice4").value;
    let diceResult4 = document.getElementById("diceResult4");  
    let values = []; // stores the values of the dice rolls
    let total = 0;
    for (let i = 0; i < numOfDice; i++){
      let value = Math.floor(Math.random() * 4) + 1;
      values.push(value);
      total += value;
    }
    if(numOfDice == String){ // now works
      document.write("asd")
      diceResult4.textContent = "please input a number to continue"; 
    } else if (numOfDice == 1){
      diceResult4.textContent = "Die: " + values + " Total: " + total;
    } else {
      diceResult4.textContent = "Dice: " + values + " Total: " + total;
    }
  }

  function rollDice6(){   
    let numOfDice = document.getElementById("numOfDice6").value;
    let diceResult6 = document.getElementById("diceResult6");   
    let values = []; // stores the values of the dice rolls
    let total = 0;
    for (let i = 0; i < numOfDice; i++){
      let value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      total += value;
    }
    if(numOfDice == String){ // now works
      document.write("asd")
      diceResult6.textContent = "please input a number to continue"; 
    } else if (numOfDice == 1){
        diceResult6.textContent = "Die: " + values + " Total: " + total;
    } else {
      diceResult6.textContent = "Dice: " + values + " Total: " + total;
    }
  }

  function rollDice8(){
    let numOfDice = document.getElementById("numOfDice8").value;
    let diceResult8 = document.getElementById("diceResult8");
    let values = []; // stores the values of the dice rolls
    let total = 0;
    for (let i = 0; i < numOfDice; i++){
      let value = Math.floor(Math.random() * 8) + 1;
      values.push(value);
      total += value;
    }
    if(numOfDice == String){ 
      document.write("asd")
      diceResult8.textContent = "please input a number to continue";
    } else if (numOfDice == 1){
        diceResult8.textContent = "Die: " + values + " Total: " + total;
    } else {
      diceResult8.textContent = "Dice: " + values + " Total: " + total;
    }
  }

  function rollDice10(){ 
    let numOfDice = document.getElementById("numOfDice10").value;
    let diceResult10 = document.getElementById("diceResult10"); 
    let values = []; // stores the values of the dice rolls
    let total = 0;
    for (let i = 0; i < numOfDice; i++){
      let value = Math.floor(Math.random() * 10) + 1;
      values.push(value);
      total += value;
    }
    if(numOfDice == String){ 
      document.write("asd")
      diceResult10.textContent = "please input a number to continue";
    } else if (numOfDice == 1){
        diceResult10.textContent = "Die: " + values + " Total: " + total;
    } else {
      diceResult10.textContent = "Dice: " + values + " Total: " + total;
    }
  }

  function rollDice12(){
    let numOfDice = document.getElementById("numOfDice12").value;
    let diceResult12 = document.getElementById("diceResult12");
    let values = []; // stores the values of the dice roll
    let total = 0
    for (let i = 0; i < numOfDice; i++){
      let value = Math.floor(Math.random() * 12) + 1;
      values.push(value);
      total += value;
    }
    if(numOfDice == String){ 
      document.write("asd")
      diceResult12.textContent = "please input a number to continue";
    } else if (numOfDice == 1){
      diceResult12.textContent = "Die: " + values + " Total: " + total;
    } else {
      diceResult12.textContent = "Dice: " + values + " Total " + total;
    }
  }
  
    function rollDice20(){
    let numOfDice = document.getElementById("numOfDice20").value;
    let diceResult20 = document.getElementById("diceResult20");
    let values = []; // stores the values of the dice rolls
    let total = 0;
    for (let i = 0; i < numOfDice; i++){
      let value = Math.floor(Math.random() * 20) + 1;
      values.push(value);
      total += value;
    }
    if(numOfDice == String){ 
      document.write("asd")
      diceResult20.textContent = "please input a number to continue";
    } else if (numOfDice == 1){
        diceResult20.textContent = "Die: " + values + " Total: " + total;
    } else {
      diceResult20.textContent = "Dice: " + values + " Total: " + total;
    }
  }

  // not prio rn
function customRoll(numOfFirstDie, numOfFacesFirstDie, numOfSecDie, numOfFacesSecDie){


}
// function test(numberOfDice, numFaces){
    
//     //let numberOfDice = document.getElementById("numOfDice").value;
//     let testID = document.getElementById("testID");

//     let values = [];
    
//     for(let i = 0; i < numberOfDice; i++){
//         let value = Math.floor(Math.random() * numFaces)+1;
//         values.push(value);
//     }

//     testID.textContent = "Dice " + values;
//     return values;
// }
// console.log("Rolls:", test(5,6));

// dice history

// select how much dice you want to roll on each one
