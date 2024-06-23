function udpdateClock() {
  let today = new Date();
  let hour = today.getHours().toString().padStart(2, 0);
  let min = today.getMinutes().toString().padStart(2, 0);
  let sec = today.getSeconds().toString().padStart(2, 0);

  let time = `${hour}:${min}:${sec}`;
  document.querySelector(".clock").textContent = time;
}
udpdateClock();
setInterval(udpdateClock, 1000);
