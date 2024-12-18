let mSec = 0;
let sec = 0;
let min = 0;
let timerInterval = null;
function updateDisplay() {
    let timeDisplay = document.getElementById("time");
    let formattedTime = 
        String(min).padStart(2, '0') + ':' +
        String(sec).padStart(2, '0') + ':' +
        String(mSec).padStart(2, '0');
    timeDisplay.innerHTML = formattedTime;
}
function startTimer(){
if (timerInterval) return ;
timerInterval = setInterval(() =>{
    mSec++;
    if(mSec == 100){
        mSec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
    }
    updateDisplay();
},10);
};
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
     mSec = 0;
     sec = 0;
     min = 0;
    updateDisplay();
}
// for practice myDate
// let myDate = document.getElementById("start-btn");
// let hours = myDate.getFullYear();
// console.log(hours);
// console.log(myDate)
// setInterval(()=>{
//     let myDate = new Date();
//     console.log(myDate)
// },1000);
