function rollStats() {

  function dieRoller(){

    die1 = Math.floor(Math.random() * 6) + 1  
    die2 = Math.floor(Math.random() * 6) + 1
    die3 = Math.floor(Math.random() * 6) + 1
    sum = die1 + die2 + die3;

    return sum;
  }
 
  var strengthValue = dieRoller();
  var dexterityValue = dieRoller();
  var constitutionValue = dieRoller();
  var intelligenceValue = dieRoller();
  var wisdomValue = dieRoller();
  var charismaValue = dieRoller();
  // Set the value of the stat field

  document.getElementById('strengthField').value = strengthValue;
  document.getElementById('dexterityField').value = dexterityValue;
  document.getElementById('constitutionField').value = constitutionValue;
  document.getElementById('intellgenceField').value = intelligenceValue;
  document.getElementById('wisdomField').value = wisdomValue;
  document.getElementById('charismaField').value = charismaValue;

  
}