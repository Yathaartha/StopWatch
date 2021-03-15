let timer;
let sec = 0;
let min = 0;
let hr = 0;
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const pauseBtn = document.getElementById("pause");

function startTimer() {
  timer = setInterval(timeHandler, 1000);
  pauseBtn.disabled = false;
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function timeHandler() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hr++;
  }
  displayTimer();
  console.log(hr + ":" + min + ":" + sec);
}

function displayTimer() {
  let secPretty;
  let minPretty;
  let hrPretty;
  let timerIndicator = document.getElementById("timer");
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
  timerIndicator.innerHTML = `${hrPretty}:${minPretty}:${secPretty}`;
}

function reset() {
  hr = 0;
  min = 0;
  sec = 0;
}

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  pauseBtn.disabled = true;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  reset();
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

startBtn.addEventListener("click", startTimer);
