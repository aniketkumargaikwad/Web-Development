const stopwatch= document.getElementById("display");
const playButton= document.getElementById("play-btn");
const pauseButton=document.getElementById("pause-btn");
const resetButton= document.getElementById("reset-btn");


let startTime;
let elapsedTime= 0;

let stopwatchInterval;

const timeToString=(timeElement)=>{
    let diffInHr= timeElement/3600000;
    let hh= Math.floor(diffInHr);

    let diffInMin= (diffInHr-hh)*60;
    let mm= Math.floor(diffInMin);

    let diffInSec= (diffInMin-mm)*60;
    let ss= Math.floor(diffInSec);

    diffInMilSec= (diffInSec-ss)*1000;
    let ms=Math.floor(diffInMilSec);

    hh= hh.toString().padStart(2,"0")
    mm= mm.toString().padStart(2,"0")
    ss= ss.toString().padStart(2,"0")
    ms= ms.toString().padStart(3,"0")
    stopwatch.innerHTML=`${hh}:${mm}:${ss}:${ms}`
}
const startStopwatch=()=>{
    startTime= Date.now()-elapsedTime;
    stopwatchInterval= setInterval(()=>{
        elapsedTime= Date.now()-startTime;
        timeToString(elapsedTime)
    },1)
    showButton("pause")
}
const pauseStopwatch=()=>{
    clearInterval(stopwatchInterval)
    showButton("play")

}
const resetStopwatch=()=>{
    clearInterval(stopwatchInterval)
    stopwatch.innerHTML= "00:00:00:000"
    elapsedTime=0;
    showButton("play")

}
const showButton=(buttonKey)=>{
    if(buttonKey=="play"){
        playButton.style.display="block";
        pauseButton.style.display="none";
    }
    else{
        pauseButton.style.display="block";
        playButton.style.display="none";
    }
}
playButton.addEventListener("click",startStopwatch);
pauseButton.addEventListener("click",pauseStopwatch);
resetButton.addEventListener("click",resetStopwatch);
