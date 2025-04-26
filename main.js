"use strict";
const label = document.getElementById("label");
const button = document.getElementById("button");
button.addEventListener("click", () => {
    label.innerText = "You clicked the button!";
});
