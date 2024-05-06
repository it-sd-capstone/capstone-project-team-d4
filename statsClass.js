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

function raceDropDown(){

  form = document.createElement('form');
  form.id ="raceForm";

  select = document.createElement('select');
  select.id = 'raceSelect';
  select.name = 'raceSelect';
  options = [' ', 'Human','Elf','Dwarf','Gnome']
  options.forEach(opt => {
    option = document.createElement('option');
    option.value = opt;
    option.textContent = opt.charAt(0) + opt.slice(1);
    select.appendChild(option)
  });


  const button = document.createElement('button');
  button.type = "submit";
  button.textContent = "Choose Race"

  form.appendChild(select);
  form.appendChild(button);

  document.getElementById('raceForm').appendChild(form);
  
  button.addEventListener('click', function(event) {
   event.preventDefault(); // Prevent form submission
   const selectedRace = document.getElementById('raceSelect').value;
   alert('You chose: ' + selectedRace);
   statMods(); 
  });
   

}

 
document.addEventListener("DOMContentLoaded", raceDropDown());

function classChoice() {
  
  const form = document.createElement('form');
  form.id = 'classForm';

  select = document.createElement('select');
  select.id = 'classSelect';
  select.name = 'classSelect';
  options = ['Fighter', 'Cleric', 'Rogue'];
  options.forEach(opt => {
    option = document.createElement('option');
    option.value = opt;
    option.textContent = opt.charAt(0) + opt.slice(1);
    select.appendChild(option);
  });

  // submit button
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Choose Class';


  form.appendChild(select);
  form.appendChild(button);

  //put form on document
  document.getElementById('formContainer').appendChild(form);

  //placeholder event for the adding of values
  button.addEventListener('click', function(event) {
    
    event.preventDefault(); // Prevent form submission
    const selectedClass = document.getElementById('classSelect').value;
    alert('You chose: ' + selectedClass);});
    
  
}
//call form
document.addEventListener('DOMContentLoaded', classChoice()); 


//now to modify the class values 

function statMods(){
  //this should give me a real time update on the classes 
  if(document.getElementById('raceSelect').value = 'Human'){
    

    alert ("this is now working. allegedly");

  }


}


 

  