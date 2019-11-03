"use strict";

document.querySelector("button").addEventListener("click", removeStart);

function removeStart() {
  document.querySelector("#start-container").classList.add("hide");
  document.querySelector(".intro").classList.remove("hidden");
  document.querySelector("#musik").play();
}

const animated = document.querySelector(".spotlight-enter-active");

animated.addEventListener("animationend", () => {
  console.log("Animation ended");
  document.querySelector(".natalie-name").classList.remove("hidden");
  document.querySelector(".natalie-name").classList.add("animation-start");
  animated.classList.add("natalie-name");

  setTimeout(myFunction, 3000);
});

function myFunction() {
  document.querySelector(".intro").classList.add("hidden");
  document.querySelector(".info").classList.remove("hidden");
  setTimeout(myFunction2, 3000);
}

function myFunction2() {
  document.querySelector(".info").classList.add("hidden");
  document.querySelector(".sarah").classList.remove("hidden");
  document.querySelector(".sarah-name").classList.remove("hidden");
}
