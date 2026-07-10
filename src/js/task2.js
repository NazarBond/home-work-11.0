const timer = document.getElementById("timer2");
const button = document.getElementById("startBtn");

button.addEventListener("click", startTimer);

function startTimer() {
  button.disabled = true;

  let time = 30000;

  timer.textContent = (time / 1000).toFixed(3);

  const interval = setInterval(() => {
    time--;

    timer.textContent = (time / 1000).toFixed(3);

    if (time === 10000) {
      timer.classList.add("animate");
    }

    if (time <= 0) {
      clearInterval(interval);

      timer.classList.remove("animate");

      button.disabled = false;

      alert("Час завершився!");
    }
  }, 1);
}
