function sum(a,b){
    return a+b;
}
function substraction(a,b){
    console.log(a-b);
}
let a=10;
let b= 2
let c= sum(a,b); console.log(c);
substraction(a,c);

let car={
    company: "BMW",
    model: "Q7",
    price: "20,00,000",
    maxSpeed: "200 km/hr",
    history: ["firstOwned",2000,"color: white"],
    run: function(){
        console.log("running at "+this.maxSpeed+" speed")
    },
    ownerDetails:{
        houseNo: 21,
        street: "Avanue Street",
        city: "Bangaluru",
        contactDetails: [1023, "TelePhone: 54666"]
    }

}
console.log(car)
console.log(car.model)
console.log(car["company","price"])
car.run()


if(car.model=="Harrier"){
    console.log("ohh yeah!!!!")
}
else if(car.company=="Audi"){
    console.log("That's Great")
}
else{
    console.log("colllect some more then buy much bigger")
}
switch(expression){
    // stricy comparision(===)
    case x:
        //code block
        break;
    case y:
        //code block
        break;
        // no use of this code block
    case a:
    case b:
        //code block;
        break;
    default:
        //code block
}