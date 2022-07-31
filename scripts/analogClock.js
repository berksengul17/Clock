const hourHand = document.querySelector(".hour.hand");
const minuteHand = document.querySelector(".minute.hand");
const secondHand = document.querySelector(".second.hand");

function updateClock(){
    const currentDate = new Date();
    const hour = formatAMPM(currentDate.getHours());
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    hourHand.style.transform = `rotate(${(hour / 12) * 360}deg)`;
    minuteHand.style.transform = `rotate(${(minute / 60) * 360}deg)`;
    secondHand.style.transform = `rotate(${(second / 60) * 360}deg)`;
    
    requestAnimationFrame(updateClock);
}

function formatAMPM(hour){
    hour = hour % 12;
    hour = hour ? hour : 12;
    return hour;
}

window.onload = () => {
    requestAnimationFrame(updateClock);
}