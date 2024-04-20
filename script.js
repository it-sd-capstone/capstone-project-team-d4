const images = [
    "dice1.jpg",
    "dice2.jpg",
    "dice3.jpg",
    "dice4.jpg"
];

let index = 0;

function imageRollover() {
    const imageElement = document.getElementById("rollover-img");
    imageElement.src = images[index];
    index = (index + 1) % images.length;
}

setInterval(imageRollover, 2000);

