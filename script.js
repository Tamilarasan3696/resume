//for loop
var person = [{
    fname: "Tamil",
    lname: "arasan",
    age: 27
}]; 
for(let i=0;i<person.length;i++){
     console.log(person[i]);
}

 //for in loop
 var cars = [{
    fname: "mercedez",
    lname: "benz",
    
 }]; 
 for (let x in cars) {
    console.log(cars[x]);
 }
 
 // for Each
 
person.forEach((element) => {
    console.log(element);
});

 //for of
 const car = [{
    fname: "FORD",
    lname: "MUSTANG",

 }]; 
 for ( let x of car){
    console.log(x);
 }
 
