let timer;
let sec = 0;
let min = 0;
let hr = 0;
let mili = 0;
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const restartBtn = document.getElementById("restart");

function startTimer() {
  timer = setInterval(timeHandler, 10);
  restartBtn.disabled = false;
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function timeHandler() {
  mili++;
  if (mili === 100) {
    mili = 0;
    sec++;
  }
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hr++;
  }
  displayTimer();
  // console.log(hr + ":" + min + ":" + sec);
}

function displayTimer() {
  let miliPretty;
  let secPretty;
  let minPretty;
  let hrPretty;
  let timerIndicator = document.getElementById("timer");
  if (mili < 10) {
    miliPretty = "0" + mili;
  } else {
    miliPretty = mili;
  }
  if (sec < 10) {
    secPretty = "0" + sec;
  } else {
    secPretty = sec;
  }
  if (min < 10) {
    minPretty = "0" + min;
  } else {
    minPretty = min;
  }
  if (hr < 10) {
    hrPretty = "0" + hr;
  } else {
    hrPretty = hr;
  }
  timerIndicator.innerHTML = `${hrPretty}:${minPretty}:${secPretty}.${miliPretty}`;
}

function reset() {
  hr = 0;
  min = 0;
  sec = 0;
  mili = 0;
}

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  restartBtn.disabled = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

restartBtn.addEventListener("click", () => {
  clearInterval(timer);
  reset();
  startBtn.disabled = false;
  restartBtn.disabled = true;
  displayTimer();
});

startBtn.addEventListener("click", startTimer);
