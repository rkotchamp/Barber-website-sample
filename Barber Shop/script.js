"use strict";
//selecting elements
const hidden = document.querySelector(".hidden");
const burgar = document.querySelector(".burgar-bars");
const socialsOverlay = document.querySelector(".socials");
const overlayLogo = document.querySelector(".overlayLogo");
// const socialsHidden = document.querySelector(".socials-hidden");
const burgerNav = document.querySelector(".burgerNav");
const timesButton = document.querySelector(".timesButton");
const logo = document.querySelector(".logo");
const navMenu = document.querySelector(".navMenu");
const contentAndButton = document.querySelector(".content-and-button");
const body = document.querySelector("body");

// Manipulating the burgar pop up menu and the closing button
// what should be done
socialsOverlay.classList.add("hidden");
overlayLogo.classList.add("hidden");

// close  function for the pop up menu
const openOverlay = function () {
  socialsOverlay.classList.remove("hidden");
  timesButton.classList.remove("hidden");
  overlayLogo.classList.remove("hidden");
  logo.classList.add("hidden");
  navMenu.classList.add("hidden");
  contentAndButton.classList.add("hidden");
  document.body.style.overflow = "hidden";

  // timesButton.classList.remove("hidden");
};

// open function for the pop up menu
const closeOverlay = function () {
  socialsOverlay.classList.add("hidden");
  timesButton.classList.add("hidden");
  overlayLogo.classList.add("hidden");
  logo.classList.remove("hidden");
  navMenu.classList.remove("hidden");
  contentAndButton.classList.remove("hidden");
  document.body.style.overflow = "auto";
};

// when you click on the burger button it must open the pop up menu
burgar.addEventListener("click", openOverlay);

// when you click on  the times button it must close the pop up menu
timesButton.addEventListener("click", closeOverlay);

// when you click on the black overlay it must close pop up menu
socialsOverlay.addEventListener("click", closeOverlay);

// when you press the escape key on your keyboard it must close the pop up menu
document.addEventListener("keydown", function (x) {
  if (x.key === "Escape") {
    closeOverlay();
  }
});

// Manipulating the navigation menu
// burgerNav.classList.add("hidden");
