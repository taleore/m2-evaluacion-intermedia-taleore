"use strict";

const userNumber = document.querySelector(".main__number");
const button = document.querySelector(".main__submit__btn");
const myRandomNumber = getRandomNumber(100);
const resultNumber = document.querySelector(".main__result");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function compareNumbers() {
  const userNumberValue = parseInt(userNumber.value);

  if (userNumberValue === myRandomNumber) {
    resultNumber.innerHTML = "HAS GANADO, CAMPEONA!";
  } else if (userNumberValue < myRandomNumber){
    resultNumber.innerHTML = "Demasiado bajo";
  } else () {
    resultNumber.innerHTML = "Demasiado alto";
  }
}

//function showResult() {}
//button.addEventListener('click', showResult());
