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
    const nextTextNodeId = option.nextText;
    state = Object.assign(state, option.nextState);
    showTextNode(nextTextNodeId);
}
// TODO: have the text node elements pull data from a JSON file





startGame();