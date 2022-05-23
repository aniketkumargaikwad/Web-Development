// var  a= 10;
// var b= 5;
// var ans= function(a,b){
//     console.log(a+b);
//     return a+b;
// }
// console.log(ans(a,b));
// ans(a,b)
// for(let x=1;x<=10; x++){
//     let y=31;
//     console.log(`${y} * ${x} = ${x*y}`)
// }
// function add(a,b,c=5){      //default parameter
//     return a+b+c;
// }
// //console.log(add(2, 4));
// const addition=(a,b,c=5)=>{return a+b+c;}
// const substraction=(a,b,c=7)=>console.log(`the substraction of b+c from a is ${a-b-c}`);
// console.log(addition(1,2))
// substraction(5,2)
//const city= ["Mumbai","Delhi",'Pune',"Bangalore/Bengaluru","Kolkata", "Goa", "Delhi"];
// for(let elements in city){                   //for-in loop--> returns indexes of array
//     console.log(elements);
// }
// for(let elements of city){                   //for-of loop--> returns elements of array
//     console.log(elements);
// }
// console.log(city)
// city.forEach(function(temp, index,array){                  //for-each loop
//     console.log(temp)
// })
// city.forEach(multiplication=(x,y,z)=>{console.log(x)})
// console.log(city.indexOf("Delhi", 2))
// console.log(city.lastIndexOf("Delhi",3))
// console.log(city.indexOf("Ranchi", 2))
// console.log(city.includes("Goa",5 ))

// const x= city.find()
// var temp;
// console.log(temp)

// temp= city.push("Agra")
// console.log(city)
// console.log(temp)
// const temp2= city.unshift("Sangli")
// const temp3= city.pop()
// console.log(city)
// console.log(temp3)
// const temp4= city.shift()
// console.log(temp4)
// console.log(city)

// var temp5 =city.splice(city.length-4,1,"Surat")
// console.log(city)
// console.log(temp5)

// var indexOfCity= city.indexOf("Kolkata")
// if(indexOfCity!=-1){
//     city.splice(indexOfCity,Infinity)
// }
// console.log(city)
// var temp= city.filter((current,index,city)=> {if(current=="Mumbai")return 1; else return 2});
// console.log(city)
// console.log(temp)
// var temp= city.map((current,index,city)=> {if(current=="Mumbai")return 1; else return 2});
// console.log(city)
// console.log(temp)

// let noArray=[2,3,4,5,6,7,8,9];
// let noArray2=noArray.map((current, index,arr)=>{return current*2;}).filter((current)=>{return current>10}).reduce((accumulate,curr)=>{
//     return accumulate+=curr;
// },10)
// console.log(noArray2)


// let rootArray=[25,36,49];
// let ansSqrtArray=rootArray.map((curr)=>{return Math.sqrt(curr)})
// console.log(ansSqrtArray)
// let arr=[1,2,3,4,5,6];
// let sum=arr.reduce((accumulate, curr, index, arr)=>{
//     return accumulate+=curr;
// })
// console.log(sum)
// const arr=[
//     [1,2],
//     [3,4],
//     [5,6,[7,8]],
// ];
// const ans=arr.reduce((acc, curr)=>{
//     return acc.concat(curr)
// })
// console.log(ans);



//string-------------------------------------->

// let s= "apple, mango, hello, banana, hello"

//s.length
//s.indexOf("hello")
//s.indexOf("hello",2)
//s.search("hello")

// let temp1= s.slice(2,5); console.log(temp1); 
// let temp2= s.slice(3); console.log(temp2);
// let temp3= s.slice(3,-2); console.log(temp3);

// let temp4= s.substring(2,5); console.log(temp4);

// let temp5= s.substr(2,10); console.log(temp5);         //second arg is req length
// let temp6= s.substr(-6); console.log(temp6); 

//replace---->does not change in existing string, returns new string
// let newS= s.replace("hello","kiwi"); console.log(newS)


//s.indecOf(2)
// let temp=s.trim();
// let tenp=s.split(",")



//date------------------------->


//1 jan 1970
//to get local time==> let currTime= new Date().toString()
//to get local time==> let currTime= new Date().toLocaleString()
//to count total milliseconds from 1jan 1970==> let secPassed= Date.now()
//const currDate= new Date()
//    console.log(currDate.toLocaleString())
//    console.log(currDate.getFullYear())
//    console.log(currDate.getMonth())--->0 based indexing
//    console.log(currDate.getDate())
//    console.log(currDate.getday())
//same methods useing set instead of get are available




//math object---------------------------------------------->

// Math.PI
// Math.round(10.25)-->10; Math.round(10.6)-->11
// Math.pow(10,2);
// Math.sqrt(25)
// Math.abs(-10.22)--->10.22
// Math.floor(10.81)=10
// Math.ceil(10.20)=11
// Math.min/max
// console.log(Math.random()*10)
// console.log(Math.trunc(12.23))





//DOM==================================================================================>


// const changeHeading=()=>{
//     document.getElementById('h11').innerHTML="This is chnaged Heading"
// }
// const callfunction1=()=>{
//     alert('This alert has been created using function call')
// }
// const option3= document.getElementById('option-3')
// option3.onclick= function(){
//     alert('This is third alert, created by using variable')
// }
// const option4= document.getElementById('option-4');
// option4.addEventListener('mouseentre',func);
// function func(){
//     console.log("hEllo")
//     alert('this is alert using adding event listner');
// }

// const selectElement=()=>{
    
    
// }

// const flavour= document.getElementById('ice-cream-select');
// flavour.addEventListener('change',()=>{
//     const nameInput= document.getElementById('name-input').value;
//     const flavour= document.getElementById('ice-cream-select').value;
//     const updateResult= document.querySelector('.result');
//     updateResult.innerHTML= `name is ${nameInput} and choosen flavour is ${flavour}`
// });
const para= document.getElementById('name');
const btn= document.getElementById('btn');

btn.addEventListener('click',func);
function func(){
    setTimeout(()=>{  
        para.innerHTML= "anonymus"
    },1000);
}
