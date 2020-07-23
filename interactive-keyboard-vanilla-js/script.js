// selecting all the elements
const text = document.querySelector(".text");
const keyboard = document.querySelector(".keyboard");
const shiftKeys = document.querySelectorAll(".shift");
const capsKey = document.getElementById("20");
const shiftKey = document.getElementById("16");

/*store the actual values of keys before pressing shift key into an array*/

const shiftBefore = [];

shiftKeys.forEach((key) => {
  shiftBefore.push(key.innerText);
});

/*now create an array of values of those keys after pressing shift key*/

const shiftAfter = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "{",
  "}",
  "|",
  ":",
  '"',
  "<",
  ">",
  "?",
];

/* ---function to check if caps lock is on ---*/

function IfCapsLock(keyPressed) {
  if (keyPressed === "Capslock") {
    keyboard.classList.add("uppercase");
  }
}

/* ---function to check if shift key is pressed --*/
function IfShift(key) {
  if (key === "Shift") {
    keyboard.classList.add("uppercase");
    for (i = 0; i < shiftKeys.length; i++) {
      shiftKeys[i].innerText = shiftAfter[i];
    }
  }
}

/* ---function to check if backspace is pressed ----*/
function IfBackspace(key) {
  if (key === "Backspace") {
    if (shiftKey.classList.contains("pressed")) {
      clearAll();
    } else {
      const newTxt = text.innerText.slice(0, -1);
      text.innerText = newTxt;
    }
  }
}

/* ----function to check if enter is pressed ----*/
function IfEnter(key) {
  if (key === "Enter") {
    text.innerHTML += "<br>";
  }
}

/* ----function to check if tab is pressed ----*/
function IfTab(key, e) {
  if (key === "Tab") {
    e.preventDefault();
    text.innerHTML += "&emsp;&emsp;";
  }
}

/*----function to check if the pressed key was a character ----*/
function IfCharacter(key) {
  if (key.length === 1) {
    text.innerHTML += key;
  }
}

/*----function to detect which key was pressed and do that particular thing---*/
function keyDown(e) {
  const keyId = e.keyCode;
  const keyPressed = e.key;
  const key = document.getElementById(keyId);
  key.classList.add("pressed");

  IfCharacter(keyPressed);
  IfCapsLock(keyPressed);
  IfShift(keyPressed);
  IfBackspace(keyPressed);
  IfEnter(keyPressed);
  IfTab(keyPressed, e);
}

/*---------function that gets invoked when key is released--------*/
function keyUp(e) {
  const keyId = e.keyCode;
  const keyPressed = e.key;
  const key = document.getElementById(keyId);
  key.classList.remove("pressed");

  //If CapsLock or Shift was just let off, and if the other isn't still on, return keys to lowercase
  if (
    (keyPressed === "Capslock" && !shiftKey.classList.contains("pressed")) ||
    (keyPressed === "Shift" && !capsKey.classList.contains("pressed"))
  ) {
    keyboard.classList.remove("uppercase");
  }

  //If Shift was just let off, replace all non-alphabetical keys with their original values rather than their shifted values
  if (keyPressed === "Shift") {
    for (i = 0; i < shiftKeys.length; i++) {
      shiftKeys[i].innerText = shiftBefore[i];
    }
  }
}

/*---function to clear all the text from screen---*/
function clearAll() {
  text.innerText = "";
}

/*-------------------------------------EVENT LISTENERS--------------------------------------------*/

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
