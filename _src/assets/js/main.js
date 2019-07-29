"use strict";

const userNumber = document.querySelector(".main__number");
const button = document.querySelector(".main__submit__btn");
const myRandomNumber = getRandomNumber(100);
const resultNumber = document.querySelector(".main__result");
const counterNumber = document.querySelector(".counter__number");
let acc = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function compareNumbers() {
  const userNumberValue = parseInt(userNumber.value);

  if (userNumberValue === myRandomNumber) {
    resultNumber.innerHTML = "HAS GANADO, CAMPEONA!";
  } else if (userNumberValue < myRandomNumber) {
    resultNumber.innerHTML = "Demasiado bajo";
  } else {
    resultNumber.innerHTML = "Demasiado alto";
  }
}

function clickButton(event) {
  event.preventDefault();
  compareNumbers();
  acc += 1;
  counterNumber.innerHTML = acc;
}

button.addEventListener("click", clickButton);
