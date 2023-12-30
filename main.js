// Color Generator ------->

const display = document.getElementById("display");
const output = document.querySelector("#output");
const Gbtn = document.querySelector(".Gbtn");
const Cbtn = document.querySelector(".Cbtn");

// Add Event listener in generate button

Gbtn.addEventListener("click", generateButton);

//  Make generateButton Function

function generateButton() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  let generateColor = `rgb(${red}, ${green}, ${blue})`;
  display.style.background = generateColor;
  show(generateColor);
}

// Show Color Code in input value

function show(gcolor) {
  output.value = gcolor;
}

//  Copy Color Code Function

Cbtn.addEventListener("click", copyColor);
function copyColor() {
  navigator.clipboard.writeText(output.value);
  Cbtn.innerHTML = "Copied &check;";
  Cbtn.style.color = "#ff4655";
}
