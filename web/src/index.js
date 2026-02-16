import "./styles.css";
import Clock from "./timer.js";

let workMin = document.querySelector("#workMin").valueAsNumber;
let breakMin = document.querySelector("#breakMin").valueAsNumber;
const StartBtn = document.querySelector("#start");
const StopBtn = document.querySelector("#stop");
const BreakBtn = document.querySelector("#break");
const Display = document.querySelector("#display");
const Mode = document.querySelector("#mode");
const SECOND = 1000;
const Timer = new Clock(workMin, breakMin, updDisplay);

function updTimer() {
  workMin = document.querySelector("#workMin").valueAsNumber;
  breakMin = document.querySelector("#breakMin").valueAsNumber;
  Timer.updateTime(workMin, breakMin);
}
function start(mode) {
  updTimer();
  Timer.switch(mode);
  Timer.start();
}
StartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Mode.textContent = "Work";
  start("Work");
});
StopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  BreakBtn.style.display = "block";
  Timer.end();
});
BreakBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Mode.textContent = "Break";
  start("Break");
});
function updDisplay(time) {
  Display.textContent = time / SECOND + " sec";
  if (time == 0) {
    BreakBtn.style.display = "block";
  } else {
    BreakBtn.style.display = "none";
  }
}
