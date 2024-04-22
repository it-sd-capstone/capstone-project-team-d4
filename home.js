const diceImages = [
    "dice1.jpg",
    "dice2.jpg",
    "dice3.jpg",
    "dice4.jpg"
];

const characterImages = [
    "character1.jpg",
    "character2.jpg",
    "character3.jpg",
    "character4.jpg"
];
const encounterImages = [
    "encounter1.jpg",
    "encounter2.jpg",
    "encounter3.jpg",
    "encounter4.jpg"
];
const rulesImages = [
    "rules1.jpg",
    "rules2.jpg",
    "rules3.jpg",
    "rules4.jpg"
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

setInterval(diceRollover, 2000);
setInterval(characterRollover, 2000);
setInterval(encounterRollover, 2000);
setInterval(rulesRollover, 2000);

