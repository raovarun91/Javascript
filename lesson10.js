// Dom functions - better to write in console tab of Chrome

console.dir(window)     // console.dir shows methods and fucntions for an object 
console.dir(window.document)
console.dir(document.body.script)
console.dir(document.body.childNodes)
//document.body.style.backgroundColor = "green"       // dynamically changes background of body tag using JS
document.body.childNodes[2].textContent = "Yes"     //dynamically changes the text content on screen for the element


// DOM Manipulation
console.log("Accessing element using id")
let value = document.getElementById("header_id")
console.log(value)
console.dir(value)

console.log("Accessing element using class")
let value2 = document.getElementsByClassName("medium_id")
console.log(value2)
console.dir(value2)
console.log("first element ", value2[0])

console.log("Accessing element using tagname")
let value3 = document.getElementsByTagName("p")
console.log(value3)
console.dir(value3)
console.log("first element from tag search is ", value3[0])

console.log("Accessing first element using querySelector (tagname)")
let value4 = document.querySelector("p")
console.log(value4)

console.log("Accessing all element using querySelector")
let value5 = document.querySelectorAll("p")
console.log(value5)
console.dir(value5)
console.log("first element from tag search is ", value5[0])

console.log("Accessing first element using querySelector (classname)")
let value6 = document.querySelector(".medium_id")
console.log(value6)

console.log("Accessing first element using querySelector (idname)")
let value7 = document.querySelector("#header_id")
console.log(value7)

//Accessing properties and attributes of element
console.log("value tagname ", value7.tagName)
console.log("value tagname ", value7.innerText)
console.log("value tagname ", value7.innerHTML)
console.log("value tagname ", value7.textContent)
