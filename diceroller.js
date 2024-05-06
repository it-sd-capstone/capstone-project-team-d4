function rollDice() {
  const dice = document.getElementById("dice");
  const sides = parseInt(document.getElementById("sides").value);
  const rolls = parseInt(document.getElementById("rolls").value);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  for (let i = 0; i < rolls; i++) {
    const rollResult = Math.floor(Math.random() * sides) + 1;
    resultDiv.innerHTML += `<span>Roll ${i + 1}: ${rollResult}</span><br>`;
    animateDice(dice, rollResult);
  }
}

function animateDice(dice, rollResult) {
  dice.classList.add("rolling");
  setTimeout(() => {
    dice.querySelector('.number').innerText = rollResult;
    dice.classList.remove("rolling");
  }, 1000);
}
