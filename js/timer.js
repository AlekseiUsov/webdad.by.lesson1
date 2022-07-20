
const start = new Date().getTime();
let time = 18000000 + 2220000 + 59000;


const timeDown = () => {
    const hours = Math.floor(time / 1000 / 60 / 60);
    const minutes = Math.floor(time / 1000 / 60) % 60;
    const seconds = Math.floor(time / 1000) % 60;
    const secondsForPrint = seconds < 10 ? `0${seconds}` : seconds;
    time -= 1000;


    const timer = document.querySelector('.form__timer');
    timer.innerHTML = `${hours}:${minutes}:${secondsForPrint}`;

    if (time < 0) {
        timer.innerHTML = 'Время истекло!'
    }
};

document.addEventListener("DOMContentLoaded", () => setInterval(timeDown, 1000));