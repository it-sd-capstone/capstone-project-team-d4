const diceImages = [
    "images/dice1.jpg",
    "images/dice2.jpg",
    "images/dice3.jpg",
    "images/dice4.jpg"
];

const characterImages = [
    "images/character1.jpg",
    "images/character2.jpg",
    "images/character3.jpg",
    "images/character4.jpg"
];
const encounterImages = [
    "images/encounter1.jpg",
    "images/encounter2.jpg",
    "images/encounter3.jpg",
    "images/encounter4.jpg"
];
const rulesImages = [
    "images/rules1.jpg",
    "images/rules2.jpg",
    "images/rules3.jpg",
    "images/rules4.jpg"
];

let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

function diceRollover() {
    const imageElement = document.getElementById("dice-rollover-img");
    imageElement.src = diceImages[index1];
    index1 = (index1 + 1) % diceImages.length;
}

function characterRollover() {
    const imageElement = document.getElementById("character-rollover-img");
    imageElement.src = characterImages[index2];
    index2 = (index2 + 1) % characterImages.length;
}
function encounterRollover() {
    const imageElement = document.getElementById("encounter-rollover-img");
    imageElement.src = encounterImages[index3];
    index3 = (index3 + 1) % encounterImages.length;
}
function rulesRollover() {
    const imageElement = document.getElementById("rules-rollover-img");
    imageElement.src = rulesImages[index4];
    index4 = (index4 + 1) % rulesImages.length;
}


