const textElement = document.getElementById('text');
const optionButtonElement = document.getElementById('option-buttons');


let state = {}
let textNodes;
var playerHP = 20; 
var goblinHP = 15; 
let combatNode;
var playerDamageText;
var goblinDamageText;


function startGame() {
    state = {}
    fetch('textNodes.json')
    .then(response => response.json())
    .then(data => {
        textNodes = data;
        showTextNode(1);
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (optionButtonElement.firstChild) {
        optionButtonElement.removeChild(optionButtonElement.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option))
            optionButtonElement.appendChild(button);
        }
    })
}

function showOption(option) {
    if (option.requiredState === null) {
        return true;
    } else {
        return state[option.requiredState];
    }
}


function selectOption(option) {
    if (option.nextText >= 100){
        combatNode = option.nextText;
        startCombat();
    }
    if (option.skillCheck && goblinHP > 0 && playerHP > 0) {
        const roll = Math.floor(Math.random() * 20) + 1; 

        console.log('Roll:', roll);

        const skillCheckPassed = roll >= option.skillCheck.threshold;

        const nextTextNodeId = skillCheckPassed ? option.skillCheck.successNextText : option.skillCheck.failureNextText;

        if (option.skillCheck.updateState) {
            state = Object.assign(state, option.skillCheck.updateState(skillCheckPassed));
        }

        const nextTextNode = textNodes.find(node => node.id === nextTextNodeId);
        
        let text = nextTextNode.text;

        text = text.replace('[roll]', roll);

        console.log('Modified Text:', text);

        nextTextNode.text = text;

        showTextNode(nextTextNodeId);
    } else if(goblinHP > 0 && playerHP > 0) {
        const nextTextNodeId = option.nextText;
        state = Object.assign(state, option.nextState);
        showTextNode(nextTextNodeId);
    }
}

function startCombat() {
    
    if (combatNode === 100){
        if (playerHP <= 0) {
            
            showTextNode(106);
            return;
        }
    }


    
    if (combatNode === 103) {
        
        
        let playerDamage = Math.floor(Math.random() * 6) + 1; 
        goblinHP -= playerDamage;

        
        playerDamageText = textNodes.find(node => node.id === 103);
        playerDamageText.text = playerDamageText.text.replace('[playerDamage]', playerDamage).replace('[goblinHP]', goblinHP);
        showTextNode(103);
        goblinDamageText = textNodes.find(node => node.id === 104);
        goblinDamageText.text = "Goblin deals [goblinDamage] damage to you. Player HP: [playerHP]";

    }
    else if (combatNode === 104) {

        if (goblinHP <= 0) {
            
            showTextNode(105);
            return;
        }
        
        let goblinDamage = Math.floor(Math.random() * 4) + 1; 
        playerHP -= goblinDamage;

        
        goblinDamageText = textNodes.find(node => node.id === 104);
        goblinDamageText.text = goblinDamageText.text.replace('[goblinDamage]', goblinDamage).replace('[playerHP]', playerHP);
        showTextNode(104);
        playerDamageText.text = "Player deals [playerDamage] damage to the goblin. Goblin HP: [goblinHP]";

        
    }
}





startGame();