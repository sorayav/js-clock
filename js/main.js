'use strict';

const secondHand = document.querySelector('.second-hand');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; // add degrees to compensate CSS rotate of hands. 
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);