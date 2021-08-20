const newYear = "1 Jan 2022";




const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");



function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();




    const TotalMilliSeconds = newYearsDate - currentDate;
    const TotalSeconds = TotalMilliSeconds / 1000;

    const seconds = Math.floor(TotalSeconds % 60);
    const minutes = Math.floor((TotalSeconds / 60) % 60);
    const hours = Math.floor((TotalSeconds / 60 / 60) % 24);
    const days = Math.floor(TotalSeconds / 60 / 60 / 24)


    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }



}

countdown()


setInterval(countdown, 1000);

