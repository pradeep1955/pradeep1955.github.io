const daysEls = document.getElementById('days');
const hoursEls = document.getElementById('hours');
const minutesEls = document.getElementById('minutes');
const secondsEls = document.getElementById('seconds');
const newYears = "1 Jan 2022";
function countDown (){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const seconds = (newYearsDate-currentDate)/1000
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const minutes =Math.floor(seconds/60)%60;
    const secs = Math.floor(seconds)%60
    //console.log(days, hours, minutes, secs);
    daysEls.innerHTML = formatTime(days);
hoursEls.innerHTML = formatTime(hours);
minutesEls.innerHTML = formatTime(minutes);
secondsEls.innerHTML = formatTime(secs);

}

function formatTime(time){
    return  time< 10 ? `0${time}` : time;
} 

//INITIAL CALL
countDown();

setInterval(countDown, 1000)


