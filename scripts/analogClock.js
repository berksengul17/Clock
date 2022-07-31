const HOUR_DELTA_ANGLE = 30;
const MINUTE_DELTA_ANGLE = 6;

const hourHand = document.querySelector(".hour.hand");
const minuteHand = document.querySelector(".minute.hand");
const secondHand = document.querySelector(".second.hand");

function initializeClock(){
    const currentDate = new Date();
    const hour = formatAMPM(currentDate.getHours());
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    hourHand.style.transform = `rotate(${hour * HOUR_DELTA_ANGLE}deg)`;
    minuteHand.style.transform = `rotate(${minute * MINUTE_DELTA_ANGLE}deg)`;
}

function formatAMPM(hour){
    hour = hour % 12;
    hour = hour ? hour : 12;
    return hour;
}

window.onload = () => {
    initializeClock();
}