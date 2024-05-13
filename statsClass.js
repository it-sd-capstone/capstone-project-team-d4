let baseStats = { //KVP for ease of modifications 
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0
};

let tempStats = { //place holders to not modify base stats
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
};
//[ {0(element{K:V,K:V,K:V})},    playerRace[|0|].race  (element{K:V,K:V,K:V}) ]
const playerRaces = [ 
    {   //arr sub 0            
      "race":"Human",
      "strBonus":"1",
      "dexBonus":"1",
      "conBonus":"1",
      "intBonus":"1",
      "wisBonus":"1",
      "chaBonus":"1"
  
    },
  
    {
      "race":"Dwarf",
      "strBonus":"0",
      "dexBonus":"0",
      "conBonus":"2",
      "intBonus":"0",
      "wisBonus":"0",
      "chaBonus":"0"
  
    },
  
    {
      "race":"Elf",
      "strBonus":"0",
      "dexBonus":"2",
      "conBonus":"0",
      "intBonus":"0",
      "wisBonus":"0",
      "chaBonus":"0"
  
    },
  
    {
      "race":"Gnome",
      "strBonus":"0",
      "dexBonus":"0",
      "conBonus":"0",
      "intBonus":"2",
      "wisBonus":"0",
      "chaBonus":"0"
  
    }
  
  ] ;
    
 
    
  

function rollStats() {

  function dieRoller(){

    die1 = Math.floor(Math.random() * 6) + 1  
    die2 = Math.floor(Math.random() * 6) + 1
    die3 = Math.floor(Math.random() * 6) + 1
    sum = die1 + die2 + die3;
    console.log(typeof sum);
    return sum;
    
  }
 
  //roll and initialize
  baseStats.strength = dieRoller();  
  baseStats.dexterity = dieRoller();
  baseStats.constitution = dieRoller();
  baseStats.intelligence = dieRoller();
  baseStats.wisdom = dieRoller();
  baseStats.charisma = dieRoller()




  
 
  document.getElementById('strengthFieldTable').textContent = baseStats.strength;
  document.getElementById('dexterityFieldTable').textContent = baseStats.dexterity;
  document.getElementById('constitutionFieldTable').textContent = baseStats.constitution;
  document.getElementById('intelligenceFieldTable').textContent = baseStats.intelligence;
  document.getElementById('wisdomFieldTable').textContent = baseStats.wisdom;
  document.getElementById('charismaFieldTable').textContent = baseStats.charisma; 
 
}
function raceDropDown(){

  form = document.createElement('form');
  form.id = "raceForm";

  select = document.createElement('select');
  select.id = 'raceSelect';
  console.log("this is my" + 'raceSelect' + " print out");
  select.name = 'raceSelect';
    playerRaces.forEach(race => {          /* races  [ (element1{race:human}) (element2{K:V})  ] */
    option = document.createElement('option');
    option.value = race.race;
    option.textContent = race.race.charAt(0) + race.race.slice(1);
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
   //applyStatModifiers(tempStats);
   
  });   

}
 
document.addEventListener("DOMContentLoaded", raceDropDown());


function classChoice(){
  
  form = document.createElement('form');
  form.id = 'classForm';

  select = document.createElement('select');
  select.id = 'classSelect';
  select.name = 'classSelect';
  options = [' ','Fighter', 'Cleric', 'Rogue']
  options.forEach(opt => {
    option = document.createElement('option');
    option.value = opt;
    option.textContent = opt.charAt(0) + opt.slice(1);
    select.appendChild(option)
  });

  // submit button
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Choose Class';

  form.appendChild(select);
  form.appendChild(button);

  //put form on document
  document.getElementById('classForm').appendChild(form);

  //placeholder event for the adding of values
  button.addEventListener('click', function(event) {    
    event.preventDefault(); // Prevent form submission     
    let selectedClass = document.getElementById('classSelect').value;    
    displayClassFeatures(selectedClass);
  });
    
} 
    
    
  

//call form
document.addEventListener('DOMContentLoaded', classChoice()); 


function statMods(selectedRace) {
   //access playerRaces[], access  
   //can i use a for loop here? 
   //
    ///selectedRace == race they want from race.race. so this has the "race Value"
   index = selectedRace;

  tempStats = baseStats.strength + playerRaces[0].strBonus;
  console.log(tempStats);

  /* switch (selectedRace) {
    case 'Human':
      tempStats.strength = baseStats.strength +1;
      tempStats.dexterity += 1;
      tempStats.constitution += 1;
      tempStats.intelligence += 1;
      tempStats.wisdom += 1;
      tempStats.charisma += 1;
      break;
    case 'Dwarf':
      tempStats.strength = baseStats.strength; 
      tempStats.constitution = baseStats.constitution + 2;
      break;
    case 'Elf':
      tempStats.dexterity += 2;
      break;
    case 'Gnome':
      tempStats.intelligence += 2;
      break;
    default:
      alert("No changes to stats. Unrecognized race selected.");
      return;   */


  
  document.getElementById('strengthFieldTable').textContent = tempStats.strength;
  document.getElementById('dexterityFieldTable').textContent = tempStats.dexterity;
  document.getElementById('constitutionFieldTable').textContent = tempStats.constitution;
  document.getElementById('intelligenceFieldTable').textContent = tempStats.intelligence;
  document.getElementById('wisdomFieldTable').textContent = tempStats.wisdom;
  document.getElementById('charismaFieldTable').textContent = tempStats.charisma;

}
 
/* function applyStatModifiers(tempStats) {
  
  function calculateModifier(stats) {
    if (stats < 1 || stats > 20) {
      return null; 
    }
    let modifiers = Math.floor((stats - 10) / 2).toString();
    console.log(modifiers);
    return modifiers;
  }

  // Calculate and display modifiers for each stat
  document.getElementById('strengthModifier').textContent = calculateModifier(tempStats.strength);
  document.getElementById('dexterityModifier').textContent = calculateModifier(tempStats.dexterity);
  document.getElementById('constitutionModifier').textContent = calculateModifier(tempStats.constitution);
  document.getElementById('intelligenceModifier').textContent = calculateModifier(tempStats.intelligence);
  document.getElementById('wisdomModifier').textContent = calculateModifier(tempStats.wisdom);
  document.getElementById('charismaModifier').textContent = calculateModifier(tempStats.charisma);
} */


function displayClassFeatures(selectedClass) {    
  switch (selectedClass) {
      case "Fighter":
        document.getElementById('skillsField').value = `Second Wind-
        You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.\nFighting Style: Protection- 
        When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.`;
        
        document.getElementById("inventory").value = `Equipment
        You start with the following equipment:
            (1) chain mail 
            (2) a shortsword and shield
            (3) two handaxes
            (4) a dungeoneer’s pack which contains    
            Backpack
            Crowbar
            Hammer
            10 Pitons
            10 Torches
            Tinderbox
            10 Days of Rations
            Waterskin
            50 feet of Rope`;
            


          break;
      case "Cleric":
      document.getElementById('skillsField').value = `    `;


      document.getElementById("inventory").value = `You start with the following equipment:

      (a) a mace, shield and a holy symbol
      (a) leather armor
      (a) a light crossbow and 20 bolts
      (a) a priest’s pack which contains:a backpack
        a blanket
        10 candles
        a tinderbox
        an alms box
        2 blocks of incense
        a censer
        vestments
        2 days of rations
        a waterskin 
      
   `;
        
          break;
      case "Rogue":
        document.getElementById('skillsField').value = `Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.\nThieves’ Cant:
        During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.        
        In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.\n    `;


        document.getElementById("inventory").value = `You start with the following equipment:

        (a) a rapier, leather armor, two daggers, and thieves’ tools
        (a) a shortbow and quiver of 20 arrows or 
        (a) a burglar’s pack which contains:
          a backpack
          50 feet of rope
          a bag of 1,000 ball bearings 
          10 feet of string, a bell
          5 candles 
          a crowbar 
          a hammer
          10 pitons
          a hooded lantern 
          2 flasks of oil
          5 days rations
          a tinderbox, and a waterskin.
        `;
          
          break;
      default:
          featuresText = "<p>Please select a class to see its features.</p>";
  }
}