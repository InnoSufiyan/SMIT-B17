var myNum = 2;

console.log("myNum", myNum ** 3)

var myName = "Bilal";
var myAge = 25;

var mySelf = "My name is " + myName + ", and I am " + myAge + " years old."
console.log(`My name is ${myName}, and I am ${myAge} years old.`)
console.log("5+5+5+5+5-2-2-2-2-2-2");


// var myAnswer = prompt("what is your name?");
// console.log("myAnswer", myAnswer)


function myFunc () {
    var myNewVariable = "something"
    console.log(myAge)
    console.log("inside scope ", myNewVariable)
}
// console.log("outside scope ", myNewVariable)

var user = {
    name: "Meelad",
    age: 17
}

console.log(`My name is ${user.name} and my age is ${user.age} years`)