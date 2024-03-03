// Premitive DataTypes

//string
let userName = "Varun"
console.log(userName)
console.log(typeof userName)

//number
let age = 10
console.log(age)
console.log(typeof age)

//also number
let age2 = 10.5
console.log(age2)
console.log(typeof age2)

//boolean
let isStudent = false
console.log(isStudent)
console.log(typeof isStudent)

//undefined
let something
console.log(something)
console.log(typeof something)

//bigint
let sample = BigInt(12345678901234567890.223)
console.log(sample)
console.log(typeof sample)

//symbol
let sample2 = Symbol("DAMN!!!!!")
console.log(sample2)
console.log(typeof sample2)


// Non-Premitive DataType
    //Objects (Arrays, fucntions) - Collection of values
    //Store key: value pairs


//Arrays
let employee = {
    fullname : "Varun Rao",
    age : 32,
    experience : 10.5,
    isworking : true
}
console.log(employee)
console.log(typeof employee)
console.log(typeof employee.age)        //this is a number type stored in object
console.log(employee["fullname"])      // one way to access value
console.log(employee.fullname)          // second way to access value

employee["age"] = employee["age"] + 1       //access and modify values of object 
console.log(employee.age)