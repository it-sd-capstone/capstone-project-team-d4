const textElement = document.getElementById('text');
const optionButtonElement = document.getElementById('option-buttons');

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
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
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    state = Object.assign(state, option.nextState);
    showTextNode(nextTextNodeId);
}
// TODO: have the text node elements pull data from a JSON file
const textNodes = [
    {
        id: 1,
        text: 'Please select option 1.',
        options: [
            {
            text: 'Option 1',
            nextState: { O1: true },
            nextText: 2
            },
            {
                text: 'Option 2',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Did you select option 1?',
        options: [
            {
                text: 'Yes',
                requiredState: (currentState) => currentState.O1,
                nextText: 3
            },
            {
                text: 'No',
                nextText: 3
            }
        ]
    }
] 

startGame();