var timer;
var timeLeft;

function startTimer() {
  var timeInput = document.getElementById('time').value;
  if (!timeInput || timeInput <= 0) {
    alert('Please enter a valid time in seconds.');
    return;
  }
  
  timeLeft = parseInt(timeInput, 10);
  clearInterval(timer);

  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  var hours = Math.floor(timeLeft / 3600);
  var minutes = Math.floor((timeLeft % 3600) / 60);
  var seconds = timeLeft % 60;

  document.getElementById('timer').textContent = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (timeLeft === 0) {
    clearInterval(timer);
    alert('Timer finished!');
  } else {
    timeLeft--;
  }
}