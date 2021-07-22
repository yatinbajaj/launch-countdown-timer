const docDays = document.getElementById('days');
const docHours = document.getElementById('hours');
const docMin = document.getElementById('min');
const docSec = document.getElementById('sec');
const countDownDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;
console.log(countDownDate);
// function for every 1000ms - 1second

const time = () => {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;
    // console.log(timeLeft);
    // calculation for timer
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min =  Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let sec =  Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    //updating to document
    docDays.innerHTML = days;
    docHours.innerHTML = hours;
    docMin.innerHTML = min;
    docSec.innerHTML = sec;
}

setInterval(time, 1000);
