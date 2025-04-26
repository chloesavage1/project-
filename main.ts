const label = document.getElementById("label") as HTMLParagraphElement;
const button = document.getElementById("button") as HTMLButtonElement;

button.addEventListener("click", () => {
  label.innerText = "You clicked the button!";
});