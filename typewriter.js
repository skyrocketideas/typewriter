"use strict";
window.addEventListener("DOMContentLoaded", init);

// get text from document class 'typerwritten'
const typeText = document.querySelector(".typewritten").textContent;

// remove text from class
let noText = (document.querySelector(".typewritten").textContent = "");

// set counter to 0
let count = 0;

// looping function to add a character at a time
function init() {
  document.querySelector(".typewritten").textContent = typeText.substring(0, count);
  if (typeText.length > count) {
    count++;
    setTimeout(init, 300);
  }
}

console.log(typeText);
console.log(noText);
