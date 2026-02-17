import "./styles.css";
import Clock from "./timer.js";
const WorkBtn = document.querySelector("#work");
const StopBtn = document.querySelector("#stop");
const BreakBtn = document.querySelector("#break");
const Display = document.querySelector("#display");
const Mode = document.querySelector("#mode");
const SECOND = 1000;
const Timer = new Clock(0, 0, updDisplay);

function setElements() {
  let workMin = document.querySelector("#workMin").valueAsNumber;
  let breakMin = document.querySelector("#breakMin").valueAsNumber;
  return [workMin, breakMin];
}
function start(mode) {
  let [workMin, breakMin] = setElements();
  if (!Number.isNaN(workMin) && !Number.isNaN(breakMin)) {
    hideBtn();
    Timer.updateTime(workMin, breakMin);
    Timer.switch(mode);
    Timer.start();
  }
}
function showBtn() {
  BreakBtn.style.display = "block";
  WorkBtn.style.display = "block";
}
function hideBtn() {
  BreakBtn.style.display = "none";
  WorkBtn.style.display = "none";
}
WorkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Mode.textContent = "Work";
  start("Work");
});
StopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showBtn();
  Timer.end();
});
BreakBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Mode.textContent = "Break";
  start("Break");
});
function formatTime(time) {
  let timeInSeconds = time / SECOND;
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = Math.floor(timeInSeconds - minutes * 60);
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return `${minutes}m:${seconds}s`;
}
function updDisplay(time) {
  Display.textContent = formatTime(time);
  if (time <= 0) {
    showBtn();
  }
}
