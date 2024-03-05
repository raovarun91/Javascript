//Functions

function exitLogger() {
    console.log("Exit")
    console.log("OK Tata Bye Bye")
}
exitLogger();


function greeting(name) {
    console.log(`Hi ${name} hope you are good.`)
}
greeting("Varun")

function sum(x,y) {
    console.log(`Sum is ${x+y}.`)           //funciton params have local or block scope. X and Y could not be accessed outised.
}
sum(2,4)

//function returning a value
function sum2(x,y) {
    return x+y
}
let val = sum2(2,4)
console.log("Returned value was",val)

// Arrow function (part of modern JS)
const sum3 = (x,y) => {
    console.log(x+y)
}
console.log(sum3)
sum3(3,5)

const sum4 = (x,y) => {
    return x+y
}
let val2 = sum4(5,5)
console.log(val2)