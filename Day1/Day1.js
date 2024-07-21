// Day1: Variables and data types

// Activity - 1

var num = 777
console.log(num);

let stringVar = "Hi, Nayan here!!"
console.log(stringVar);
console.log("--------------------------");
//Activity -2
const constVar = true
const constVar2 = false
console.log(constVar);
console.log(constVar2);
console.log("--------------------------");
//Activity -3 datatype
var numberType = 4
var stringType = "Nayan"
var boolType = false
let objectType = {Name :"Nayan", Age: "24"}
const arr = ["nayan", 7, false]
console.log(typeof(numberType));
console.log(typeof(stringType));
console.log(typeof(boolType));
console.log(typeof(objectType));
console.log(typeof(arr));
console.log("--------------------------");
//Activity -4 reassign
let first = 6
let second = 9
first = second
console.log(first);
console.log(second);
console.log("--------------------------");

//Activity - 5 Understanding const
const fir = 6
let sec = 9
// fir = sec
console.log(fir);
console.log(sec);
//In JavaScript, the const keyword is used to declare variables that are meant to be constant, 
//meaning their values cannot be reassigned once they are set. 
//However, this does not make the value immutable if the value is an object or array. 
//The contents of the object or array can still be changed, 
//but the variable itself cannot be reassigned to a different value or object.
