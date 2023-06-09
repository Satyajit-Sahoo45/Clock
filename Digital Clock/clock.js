console.log("WelCome To Digital Clock");

function updateClock() {
    //Get the current date
    let currentTime = new Date();
    
    //extract hour , minute, second from the date
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    //pad if minute , second and hour is less than 10(single digit)
    currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
    currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;
    cuurentHour = (currentHour < 10 ? "0" : "") + currentHour;

    //convert railway clock to AM/PM clock
    currentHour = (currentHour > 12) ? currentHour - 12 : "" + currentHour;
    currentHour = (currentHour == 0) ? 12 : "" + currentHour;
    
    //choose AM/PM as per the time of the day
    let timeOfDay = (cuurentHour < 12) ? "AM" : "PM";

    //prepare the time string from hour, minute and second
    let currentTimeStr = currentHour + ":" + currentMinute + ":" + currentSecond + " " + timeOfDay;

    //insert the time string inside the DOM
    document.getElementById('clock').innerHTML = currentTimeStr;
}

const alarmSubmit = document.getElementById('alarmSubmit');

let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

//
alarmSubmit.addEventListener('click', (e)=>{
    e.preventDefault();

    const alarm = document.getElementById('alarm');
    alarmValue = new Date(alarm.value);
    // console.log(`setting alarm for ${alarmValue}...`);
    now = new Date();
    // console.log(now);
    let timeToAlarm = alarmValue - now;
    // console.log(timeToAlarm);
    if(timeToAlarm >= 0){
        setTimeout(() => {
            // console.log("ringing");
            ringTon();
        }, timeToAlarm);
    }
})

function ringTon(){
    // console.log("alarm is ringing");
    audio.play();
}