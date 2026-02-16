/**
 * 1. Take in values of #workMin & #breakMin from template.html when #start is pressed
 * 2. new Clock(workMin, breakMin, callback)
 * 2a. callback should update #display
 * 
 */

import "./styles.css";
import Clock from "./timer.js"

let workMin = document.querySelector("#workMin").valueAsNumber;
let breakMin = document.querySelector("#breakMin").valueAsNumber;
const StartBtn = document.querySelector("#start");
const StopBtn = document.querySelector("#stop");
const BreakBtn = document.querySelector('#break');
const Display = document.querySelector("#display");
const SECOND = 1000;
const Timer = new Clock(workMin, breakMin, updDisplay);

StartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  workMin = document.querySelector("#workMin").valueAsNumber;
  breakMin = document.querySelector("#breakMin").valueAsNumber;
  Timer.updateTime(workMin, breakMin);
  Timer.switchWork();
  Timer.start();
});
StopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  Timer.end();
});
BreakBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Timer.switchBreak();
  Timer.start();
});
function updDisplay(time){
  Display.textContent = time / SECOND;
  if (time == 0) {
    BreakBtn.style.display = 'block';
  } else {
    BreakBtn.style.display = 'none';
  }
}