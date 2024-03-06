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

//forEach function      array.forEach (callbackfunction)

let ourscore = [3,5,1,9,6]

ourscore.forEach(function increaseone(val) {
    console.log(val + 1)
})

ourscore.forEach((val) => console.log(val+1))       //doing same using arrow funciton as callback function

ourscore.forEach((val, idx, arr) => {               //3 parameter eachvalue, index, completearray could be passed to forEach funciton
    console.log(val+1, idx, arr)
})

let oursamefunction = (val) => console.log(val+1)
ourscore.forEach(oursamefunction)


//map funciton - same as forEach but used when we want to create a new array
let newscore = ourscore.map((val) => {
    return val*2
})
console.log(newscore)


//filter function
let oddscore = ourscore.filter((val) => {
    return val%2 ===1
})
console.log(oddscore)

//reduce function   - takes array, perform opertaion and return single value. aggregator function
let sumscore = ourscore.reduce((sum, val) => {
    return sum + val
})
console.log(sumscore)

let highscore = ourscore.reduce((high, val) => {
    return high > val ? high : val
})
console.log(highscore)