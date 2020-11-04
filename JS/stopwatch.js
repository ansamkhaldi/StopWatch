let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

// Convert the time to a format of hours, minutes, seconds, and milliseconds
function timeToString(time) {
    let Hrs = time / 3600000;
    let hh = Math.floor(Hrs);
  
    let Min = (Hrs - hh) * 60;
    let mm = Math.floor(Min);
  
    let Sec = (Min - mm) * 60;
    let ss = Math.floor(Sec);
  
    let Ms = (Sec - ss) * 100;
    let ms = Math.floor(Ms);
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedHH}h:${formattedMM}m:${formattedSS}s:${formattedMS}ms`;
  }
console.log(timeToString(1000));

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(text) {
  document.getElementById("display").innerHTML = text;
}
// Create "start" function

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
  }
  // Create "pause" function
  function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
  }
  // Create "reset" function
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
  }


  // Create function to display buttons

function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }


