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
       strBonus: 1,
       dexBonus: 1,
       conBonus: 1,
       intBonus: 1,
       wisBonus: 1,
       chaBonus: 1
  
    },
  
    {
      "race": "Dwarf",
       strBonus : 0,
       dexBonus: 0,
       conBonus: 2,
       intBonus: 0,
       wisBonus: 0,
       chaBonus: 0
  
    },
  
    {
      "race":"Elf",
      strBonus : 0,
      dexBonus: 2,
      conBonus: 0,
      intBonus: 0,
      wisBonus: 0,
      chaBonus: 0
  
    },
  
    {
      "race":"Gnome",
      strBonus : 0,
      dexBonus: 0,
      conBonus: 0,
      intBonus: 2,
      wisBonus: 0,
      chaBonus: 0
  
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
    select.name = 'raceSelect';
    playerRaces.forEach((race, index) => {          /* races  [ (element1{race:human}) (element2{K:V})  ] */
    option = document.createElement('option');
    option.value = index;
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
   statMods(selectedRace);
   calculateModifier(tempStats)  
   applyStatModifiers(tempStats);

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


function statMods(selectedRace, index) {    
    
    playerRaces.race = selectedRace;

    tempStats.strength = baseStats.strength + playerRaces[selectedRace].strBonus;
    tempStats.dexterity = baseStats.dexterity + playerRaces[selectedRace].dexBonus;
    tempStats.constitution = baseStats.constitution + playerRaces[selectedRace].conBonus;
    tempStats.intelligence = baseStats.intelligence + playerRaces[selectedRace].intBonus;
    tempStats.wisdom = baseStats.wisdom + playerRaces[selectedRace].wisBonus;
    tempStats.charisma = baseStats.charisma + playerRaces[selectedRace].chaBonus;




  
  document.getElementById('strengthFieldTable').textContent = tempStats.strength;
  document.getElementById('dexterityFieldTable').textContent = tempStats.dexterity;
  document.getElementById('constitutionFieldTable').textContent = tempStats.constitution;
  document.getElementById('intelligenceFieldTable').textContent = tempStats.intelligence;
  document.getElementById('wisdomFieldTable').textContent = tempStats.wisdom;
  document.getElementById('charismaFieldTable').textContent = tempStats.charisma;

}
 

  function calculateModifier(stats) {
    if (stats < 1 || stats > 20) {
      return null; 
    }
    let modifiers = Math.floor((stats - 10) / 2).toString();
    console.log(modifiers);
    return modifiers;
  }

 function applyStatModifiers(tempStats) {
  
  strModResult = calculateModifier(tempStats.strength);
  dexModResult = calculateModifier(tempStats.dexterity);
  conModResult = calculateModifier(tempStats.constitution);
  intModResult = calculateModifier(tempStats.intelligence);
  wisModResult = calculateModifier(tempStats.wisdom);
  chaModResult = calculateModifier(tempStats.charisma);

  // Calculate and display modifiers for each stat
  document.getElementById('strengthModifier').textContent = strModResult;
  document.getElementById('dexterityModifier').textContent = dexModResult;
  document.getElementById('constitutionModifier').textContent = conModResult;
  document.getElementById('intelligenceModifier').textContent = intModResult;
  document.getElementById('wisdomModifier').textContent = wisModResult;
  document.getElementById('charismaModifier').textContent = chaModResult;

  document.getElementById('athletics').value = strModResult;
  document.getElementById('acrobatics').value = dexModResult;
  document.getElementById('sleightOfHand').value = dexModResult;
  document.getElementById('stealth').value = dexModResult;
  document.getElementById('arcana').value = intModResult;
  document.getElementById('history').value = intModResult;
  document.getElementById('investigation').value = intModResult;
  document.getElementById('nature').value = intModResult;
  document.getElementById('religion').value = intModResult;
  document.getElementById('animalHandling').value = wisModResult;
  document.getElementById('insight').value = wisModResult;
  document.getElementById('medicine').value = wisModResult;
  document.getElementById('perception').value = wisModResult;
  document.getElementById('survival').value = wisModResult; 
  document.getElementById('deception').value = chaModResult;
  document.getElementById('intimidation').value = chaModResult;
  document.getElementById('performance').value = chaModResult;
  document.getElementById('persuasion').value = chaModResult;

} 


function displayClassFeatures(selectedClass) {    
  switch (selectedClass) {
      case "Fighter":
        hpResult = parseInt(conModResult) + 10;
        console.log(hpResult);
        document.getElementById('hitPoints').textContent = hpResult;
        console.log(conModResult);
        document.getElementById('armorClass').textContent = 16;
        document.getElementById('skillsField').value = `Weapon Attack: Attack with your weapon, Roll a d20, add the appropriate modifier to the result!(str, dex depending on weapon)\nSecond Wind-
        You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.\nFighting Style: Protection- 
        When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.`;
        
        document.getElementById("inventory").value = `Equipment
        You start with the following equipment:
            (1) chain mail (ac =16)
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
      hpResult = parseInt(conModResult) + 8;
      armorResult = parseInt(dexModResult) + 11;
      document.getElementById('hitPoints').textContent = hpResult;
      document.getElementById('armorClass').textContent = armorResult;
      document.getElementById('skillsField').value = `
      Weapon Attack: Attack with your weapon, Roll a d20, add the appropriate modifier to the result!(str, dex depending on weapon)\n
      CANTRIP: LIGHT \nCasting Time: 1 action\n
      Range: Touch\n
      Components: V, M (a firefly or phosphorescent moss)\n
      Duration: 1 hour\n
      
      You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.\n
      
      If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.\n\nCANTRIP: Sacred Flame \nCasting Time: 1 action\n
      Range: 60 feet\n
      Components: V, S\n
      Duration: Instantaneous\n
      
      Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.\n
      
      At Higher Levels. The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).\n CANTRIP: Guidance\n Divination cantrip\n

      Casting Time: 1 action\n
      Range: Touch\n
      Components: V, S\n
      Duration: Concentration, up to 1 minute\n
      
      You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.\n LEVEL 1 SPELL: Healing Word:\n Cure Casting Time: 1 bonus action\n
      Range: 60 feet\n
      Components: V\n
      Duration: Instantaneous\n
      
      A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n
      
      At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.\n
      
      LEVEL 1 SPELL: Guiding Bolt\n Casting Time: 1 action\n
      Range: 120 feet\n
      Components: V, S\n
      Duration: 1 round\n
      
      A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.\n
      
      At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.\n
      

      `;


      document.getElementById("inventory").value = `You start with the following equipment:

      (a) a mace, shield and a holy symbol
      (a) leather armor (ac = 11 + dex mod)
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
        hpResult = parseInt(conModResult) + 8;
        armorResult = parseInt(dexModResult) + 11;
        document.getElementById('hitPoints').textContent = hpResult;
        document.getElementById('armorClass').textContent = armorResult;
        document.getElementById('skillsField').value = `      Weapon Attack: Attack with your weapon, Roll a d20, add the appropriate modifier to the result!(str, dex depending on weapon)\n
        Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.\nThieves’ Cant:
        During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.\n        
        In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.\n    `;


        document.getElementById("inventory").value = `You start with the following equipment:

        (a) a rapier, leather armor (ac = 11 + dex mod), two daggers, and thieves’ tools
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