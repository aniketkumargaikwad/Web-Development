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