const displayElement= document.getElementById("display");
const input= document.getElementById("entre-name");
const btn1= document.getElementById("btn1");
const btn2= document.getElementById("btn2");

const showText= ()=>{
    displayElement.style.display="block"
}
const hideText=()=>{
    displayElement.style.display="none";
}

btn1.addEventListener("click",showText);
btn2.addEventListener("click",hideText);