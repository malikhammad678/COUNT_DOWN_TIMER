const days = document.getElementById('days');
const hours = document.getElementById('hours');
const min = document.getElementById('min');
const sec = document.getElementById('sec');


const updateCountDown = (deadline) => {
  const currentTime = new Date();
  const timeDifference = deadline - currentTime;
  let calsec = Math.floor(timeDifference/1000) % 60;
  let calmin =Math.floor(timeDifference/1000/60) % 60;
  let calhour =Math.floor(timeDifference/1000/60/60) % 24;
  let caldays =Math.floor(timeDifference/1000/60/60/24);
  days.textContent = formateTime(caldays);
  hours.textContent = formateTime(calhour);
  min.textContent = formateTime(calmin);
  sec.textContent = formateTime(calsec);
}

const formateTime = (time) => {
  return time < 10 ? `0${time}` : `${time}`;
}

const countDown = (targetDate) => {
  setInterval(() => updateCountDown(targetDate),1000)
}

const targetDate = new Date("sep 11 2029 7:00");
countDown(targetDate);