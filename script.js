"use strict";

document.querySelector("button").addEventListener("click", removeStart);

function removeStart() {
  document.querySelector("#start-container").classList.add("hide");
}
