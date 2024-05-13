const textElement = document.getElementById('text');
const optionButtonElement = document.getElementById('option-buttons');


let state = {}
let textNodes;

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
    if (option.skillCheck) {
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
    } else {
        const nextTextNodeId = option.nextText;
        state = Object.assign(state, option.nextState);
        showTextNode(nextTextNodeId);
    }
}






startGame();