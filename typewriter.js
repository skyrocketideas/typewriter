"use strict";
window.addEventListener("DOMContentLoaded", init);

// get text from document class 'typerwritten'
// const typeText = document.querySelector(".typewritten").textContent;

// remove text from class
// let noText = (document.querySelector(".typewritten").textContent = "");

// set counter to 0
// let count = 0;

// looping function to add a character at a time
// function init() {
//   document.querySelector(".typewritten").textContent = typeText.substring(0, count);
//   if (typeText.length > count) {
//     count++;
//     setTimeout(init, 300);
//   }
// }

// console.log(typeText);
// console.log(noText);

function init() {
  const typeText = document.querySelector(".typewritten");
  typewriter(typeText, done2);
}

function done2() {
  console.log("damn it Done!");
}

function typewriter(element, callback) {
  const typeText = element.textContent;

  let noText = (element.textContent = "");
  let count = 0;

  function init() {
    element.textContent = typeText.substring(0, count);
    if (typeText.length > count) {
      count++;
      setTimeout(init, 100);
    } else {
      callback();
    }
  }

  init();
}
