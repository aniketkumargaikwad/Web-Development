const bar= document.getElementById('bar')
const nav= document.getElementById('navbar-options')
const close= document.getElementById('close')


if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active1')
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active1')
    })
}

const defText= document.getElementById("para");
// const speed= document.getElementById("speed");

const text=" Save more with coupons and get upto 70% off"

let index= 1;
const number= 500;
// let time= number/speed.value
let time= number/8

function writeText(){
    defText.innerHTML= text.slice(0, index);
    index++;
    if(index>text.length){
        index=0;
    }
    setTimeout(writeText,time)
}

writeText();
// speed.addEventListener("input",(event)=>{
//     time=number/event.target.value
// })