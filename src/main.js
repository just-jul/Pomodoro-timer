const { invoke } = window.__TAURI__.core;

const heading = document.querySelector(".heading");

const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const resetBtn = document.querySelector(".reset-btn");

const resumeBtn = document.querySelector(".resume-btn");

const startContainer = document.querySelector(".btn-container");

const pauseResetCont = document.querySelector(".btn-container-2")

const timer = document.querySelector(".timer");


let myInterval;
let totalSeconds = 25 * 60;

let breakSeconds = 5 * 60;

function updateDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // add a zero if seconds are less than 10
  timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

}

startBtn.addEventListener("click", (e) =>  {
  startBtn.style.visibility = "hidden";
  pauseResetCont.style.visibility = "visible";

  startTimer();

  
});

pauseBtn.addEventListener("click", (e) => {
  pauseResetCont.style.visibility = "visible";
  startBtn.style.visibility = "hidden";

  if (pauseBtn.innerHTML === "Resume") {
    pauseBtn.innerHTML = "Pause";
    startTimer();
  } else {
    pauseBtn.innerHTML = "Resume";
    pauseTimer();
  }

})

resetBtn.addEventListener("click", (e) => {
  pauseResetCont.style.visibility = "hidden";
  startBtn.style.visibility = "visible";

  resetTimer();
});

function startTimer() {
  myInterval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      clearInterval(myInterval);
      myInterval = null;

      alert('Times up');
      heading.textContent = "Time's up!"

    }
  }, 1000);
}


function pauseTimer() {
  clearInterval(myInterval);
}

function resetTimer() {

  clearInterval(myInterval);
  timer.innerHTML = "25:00";

  heading.textContent = "Hi again!"
}


