"use strict";

document.querySelector("button").addEventListener("click", removeStart);

function removeStart() {
  document.querySelector("#start-container").classList.add("hide");
  document.querySelector(".intro").classList.remove("hidden");
}

const animated = document.querySelector(".spotlight-enter-active");

animated.addEventListener("animationend", () => {
  console.log("Animation ended");
  document.querySelector(".natalie-name").classList.remove("hidden");
  document.querySelector(".natalie-name").classList.add("animation-start");
  animated.classList.add("natalie-name");
});
