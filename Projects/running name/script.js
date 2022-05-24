const defText= document.getElementById("name");
const speed= document.getElementById("speed");

const text=" My Name is Aniket Gaikwad"

let index= 1;
const number= 500;
let time= number/speed.value

function writeText(){
    defText.innerHTML= text.slice(0, index);
    index++;
    if(index>text.length){
        index=0;
    }
    setTimeout(writeText,time)
}

writeText();
speed.addEventListener("input",(event)=>{
    time=number/event.target.value
})