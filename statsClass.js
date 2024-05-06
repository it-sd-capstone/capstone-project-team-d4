let baseStats = { //KVP for ease of modifications 
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0
};


function rollStats() {

  function dieRoller(){

    die1 = Math.floor(Math.random() * 6) + 1  
    die2 = Math.floor(Math.random() * 6) + 1
    die3 = Math.floor(Math.random() * 6) + 1
    sum = die1 + die2 + die3;

    return sum;
  }
 
  //roll and initialize
  baseStats.strength = dieRoller();
  baseStats.dexterity = dieRoller();
  baseStats.constitution = dieRoller();
  baseStats.intelligence = dieRoller();
  baseStats.wisdom = dieRoller();
  baseStats.charisma = dieRoller()

  // Set the value of the stat field to base +/- any mods
  
  document.getElementById('strengthField').value = baseStats.strength;
  document.getElementById('dexterityField').value = baseStats.dexterity;
  document.getElementById('constitutionField').value = baseStats.constitution;
  document.getElementById('intellgenceField').value = baseStats.intelligence;
  document.getElementById('wisdomField').value = baseStats.wisdom;
  document.getElementById('charismaField').value = baseStats.charisma;

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
   let selectedRace = document.getElementById('raceSelect').value;
   //alert('You chose: ' + selectedRace);
   statMods(selectedRace);
   
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

function statMods(selectedRace) {
  alert("this is being accessed")
  console.log("Processing race: ", selectedRace);
  switch (selectedRace) {
    case 'Human':
      alert('inside human')
      baseStats.strength += 1;
      baseStats.dexterity += 1;
      baseStats.constitution += 1;
      baseStats.intelligence += 1;
      baseStats.wisdom += 1;
      baseStats.charisma += 1;
      break;
    case 'Dwarf':
      baseStats.constitution += 2;
      break;
    case 'Elf':
      baseStats.dexterity += 2;
      break;
    case 'Gnome':
      baseStats.intelligence += 2;
      break;
    default:
      alert("No changes to stats. Unrecognized race selected.");
      break;
  }
}

 














