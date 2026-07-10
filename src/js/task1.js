const timer = document.getElementById("timer1");

let minutes = 60;

timer.textContent = "60:00";

const interval = setInterval(() => {
  minutes--;

  timer.textContent = `${String(minutes).padStart(2, "0")}:00`;

  if (minutes === 30) {
    alert("Залишилось менше половини часу!");
    timer.classList.add("warning");
  }

  if (minutes === 0) {
    clearInterval(interval);
  }
}, 1000);
