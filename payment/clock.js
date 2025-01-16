let timer;
let minutes = 30;
let seconds = 0;


function updateTimer() {

  const minuteDisplay = document.getElementById('minutes');
  const secondDisplay = document.getElementById('seconds');

  if (seconds <= 0) {
    if (minutes <= 0) {
      clearInterval(timer);
      minuteDisplay.innerText = '00';
      secondDisplay.innerText = '00';
      alert('Time is up!');
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }


  minuteDisplay.innerText = minutes < 10 ? '0' + minutes : minutes;
  secondDisplay.innerText = seconds < 10 ? '0' + seconds : seconds;
}


timer = setInterval(updateTimer, 1000);
