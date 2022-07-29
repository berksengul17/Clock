const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const date = new Date();

function initializeTime(){
    hour.textContent = date.getHours();
    minute.textContent = date.getMinutes();
    second.textContent = date.getSeconds();
}

function updateTime(){

    if(second.textContent === "59"){
        second.textContent = 00;
        addOne(minute);
    }

    else{
        addOne(second);
    }

    if(minute.textContent === "59"){
        minute.textContent = 00;
        addOne(hour);
    }

}

function addOne(time){
    time.textContent = Number(time.textContent) + 1;
}

window.onload = () => {
    initializeTime();
    updateTime();
    setInterval(updateTime, 1000);
}