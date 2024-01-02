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

//  Random Password Generator  ------->

const displayPass = document.querySelector("#displayPass");
const gpBtn = document.querySelector(".gpBtn");
const cpBtn = document.querySelector(".cpBtn");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = uppercase.toLocaleLowerCase();
const charecter = `"~!@#$%^&*()-=+_;:<,>.?/|{}[]`;
const number = "1234506789";

// Make a long string combination of uppercase, lowercase, number, charecter

const allcharecter = uppercase + lowercase + charecter + number;
const passwordLength = 10;

// Add Event listener in Generate Buttton

gpBtn.addEventListener("click", function () {
  const upper = uppercase[Math.floor(Math.random() * uppercase.length)];
  const lower = lowercase[Math.floor(Math.random() * lowercase.length)];
  const char = charecter[Math.floor(Math.random() * charecter.length)];
  const num = number[Math.floor(Math.random() * number.length)];
  let password = lower + num + upper + char;
  while (password.length <= passwordLength) {
    password += allcharecter[Math.floor(Math.random() * allcharecter.length)];
  }
  displayPass.value = password;
});

//  Copy Password Function

cpBtn.addEventListener("click", copyPass);
function copyPass() {
  navigator.clipboard.writeText(displayPass.value);
  cpBtn.innerHTML = "Copied &check;";
  cpBtn.style.color = "#ff4655";
}
