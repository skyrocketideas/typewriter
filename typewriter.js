"use strict";
window.addEventListener("DOMContentLoaded", init);

// get text from document class 'typerwritten'
const typeText = document.querySelector(".typewritten").textContent;

// remove text from class
const noText = (document.querySelector(".typewritten").textContent = "");

// set counter to 0
let count = 0;

// looping function to add a character at a time
function init() {
  document.querySelector(".typewritten").textContent = typeText.substring(0, count);
  if (typeText.length > count) {
    count++;
    setTimeout(init, 100);
  }
  console.log(count);
}

console.log(typeText);
