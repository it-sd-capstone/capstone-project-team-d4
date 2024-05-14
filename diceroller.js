var canvas = document.getElementById('diceCanvas');
var ctx = canvas.getContext('2d');
var diceSize = 100;
var diceX = -diceSize;
var diceY = canvas.height - diceSize - 10;
var rollSpeed = 10;
var bounceHeight = 30;
var bounceSpeed = 0.10;
var currentNumber = 1;

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDice(diceX, diceY);
  for (let i = 0; i < diceRolls.length; i++) {
    let dice = diceRolls[i];
    drawDice(dice.x, dice.y, dice.number);
  }
}

function rollAndBounce() {
  var angle = 0;
  var initialY = diceY;
  var rollInterval = setInterval(function () {

    diceX += rollSpeed;
    if (diceX >= canvas.width - diceSize) {
      diceX = canvas.width - diceSize;

      clearInterval(rollInterval);
      var bounceInterval = setInterval(function () {
        angle += bounceSpeed;
        diceY = initialY - Math.sin(angle) * bounceHeight;
        if (angle >= Math.PI) {
          clearInterval(bounceInterval);

          setTimeout(function () {
            diceX = -diceSize;
            diceY = canvas.height - diceSize - 10;
          }, 1000000);
        }
      }, 1000 / 60);
    }
  }, 1000 / 60);
}

function drawDice(x, y) {
  ctx.beginPath();
  ctx.rect(x, y, diceSize, diceSize);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(currentNumber, x + diceSize / 2, y + diceSize / 2);
}

function rollDice(sides) {
  var numOfDice = parseInt(document.getElementById('numOfDice' + sides).value);
  var result = [];
  for (var i = 0; i < numOfDice; i++) {
    let functionName = "rollDice" + sides;
    let rollResult = window[functionName](sides);
    result.push(rollResult);
  }
  diceX = -diceSize;
  diceY = canvas.height - diceSize - 10;
  currentNumber = result[result.length - 1];
  rollAndBounce();
}
animate();

function rollDice4() {
  let numOfDice = parseInt(document.getElementById("numOfDice4").value);
  let diceResult4 = document.getElementById("diceResult4");
  let values = []; // stores the values of the dice rolls
  let total = 0;
  for (let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 4) + 1;
    values.push(value);
    total += value;
  }
  if (isNaN(numOfDice)) { // now works
    diceResult4.textContent = "please input a number to continue";
  } else if (numOfDice == 1) {
    diceResult4.textContent = "Die: " + values + " Total: " + total;
  } else {
    diceResult4.textContent = "Dice: " + values + " Total: " + total;
  }
  return values;
}

function rollDice6() {
  let numOfDice = parseInt(document.getElementById("numOfDice6").value);
  let diceResult6 = document.getElementById("diceResult6");
  let values = []; // stores the values of the dice rolls
  let total = 0;
  for (let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    total += value;
  }
  if (isNaN(numOfDice)) { // now works
    diceResult6.textContent = "please input a number to continue";
  } else if (numOfDice == 1) {
    diceResult6.textContent = "Die: " + values + " Total: " + total;
  } else {
    diceResult6.textContent = "Dice: " + values + " Total: " + total;
  }
  return values;
}

function rollDice8() {
  let numOfDice = parseInt(document.getElementById("numOfDice8").value);
  let diceResult8 = document.getElementById("diceResult8");
  let values = []; // stores the values of the dice rolls
  let total = 0;
  for (let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 8) + 1;
    values.push(value);
    total += value;
  }
  if (isNaN(numOfDice)) {
    diceResult8.textContent = "please input a number to continue";
  } else if (numOfDice == 1) {
    diceResult8.textContent = "Die: " + values + " Total: " + total;
  } else {
    diceResult8.textContent = "Dice: " + values + " Total: " + total;
  }
  return values;
}

function rollDice10() {
  let numOfDice = parseInt(document.getElementById("numOfDice10").value);
  let diceResult10 = document.getElementById("diceResult10");
  let values = []; // stores the values of the dice rolls
  let total = 0;
  for (let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 10) + 1;
    values.push(value);
    total += value;
  }
  if (isNaN(numOfDice)) {
    diceResult10.textContent = "please input a number to continue";
  } else if (numOfDice == 1) {
    diceResult10.textContent = "Die: " + values + " Total: " + total;
  } else {
    diceResult10.textContent = "Dice: " + values + " Total: " + total;
  }
  return values;
}

function rollDice12() {
  let numOfDice = parseInt(document.getElementById("numOfDice12").value);
  let diceResult12 = document.getElementById("diceResult12");
  let values = []; // stores the values of the dice roll
  let total = 0
  for (let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 12) + 1;
    values.push(value);
    total += value;
  }
  if (isNaN(numOfDice)) {
    diceResult12.textContent = "please input a number to continue";
  } else if (numOfDice == 1) {
    diceResult12.textContent = "Die: " + values + " Total: " + total;
  } else {
    diceResult12.textContent = "Dice: " + values + " Total " + total;
  }
  return values;
}

function rollDice20() {
  let numOfDice = parseInt(document.getElementById("numOfDice20").value);
  let diceResult20 = document.getElementById("diceResult20");
  let values = []; // stores the values of the dice rolls
  let total = 0;
  for (let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 20) + 1;
    values.push(value);
    total += value;
  }
  if (isNaN(numOfDice)) {
    diceResult20.textContent = "please input a number to continue";
  } else if (numOfDice == 1) {
    diceResult20.textContent = "Die: " + values + " Total: " + total;
  } else {
    diceResult20.textContent = "Dice: " + values + " Total: " + total;
  }
  return values;
}