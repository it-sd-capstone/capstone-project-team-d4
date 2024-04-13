// This is the JS file named, script.js for the project

console.log("Hello " + name + "! From the js file!");

document.write("Hello from the js file");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 150, 100);
