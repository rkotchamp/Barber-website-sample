"use strict";
//selecting elements
const hidden = document.querySelector(".hidden");
const burgar = document.querySelector(".burgar-bars");
const socialsOverlay = document.querySelector(".socials");
// const socialsHidden = document.querySelector(".socials-hidden");
const burgerNav = document.querySelector(".burgerNav");
const timesButton = document.querySelector(".timesButton");

// Manipulating the burgar pop up menu and the closing button
// what should be done
socialsOverlay.classList.add("hidden");

// close Button function
const closeOverlay = function () {
  socialsOverlay.classList.remove("hidden");
  timesButton.classList.remove("hidden");
  // timesButton.classList.remove("hidden");
};

const openOverlay = function () {
  socialsOverlay.classList.add("hidden");
  timesButton.classList.add("hidden");
};

// creating events
burgar.addEventListener("click", closeOverlay);

// when you click on  the times button it must close the pop up menu
timesButton.addEventListener(
  "click",
  openOverlay
  // timesButton.classList.add("hidden");
  // socialsOverlay.classList.add("hidden");
);

// Manipulating the navigation menu
burgerNav.classList.add("hidden");
