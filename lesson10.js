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
console.log("value tagname ", value7.textContent)       // shows hidden text elements as well 

//access child element
console.log(document.querySelector("div").children)
console.log(document.querySelector("div").innerText)
//document.querySelector("div").innerText = "Guess"
//console.log('document.querySelector("div").innerText = "Guess" run....')
//console.log("now new value of this complete div is ", document.querySelector("div").innerText)

//Get and Set attribute for
console.log("for H1 heading element value.getAttrubite('id') returns this value ", value.getAttribute("id"))
console.log("change the value of id for above element to new_header_id value.setAttrubite('id', 'new_header_id')", value.setAttribute("id", "new_header_id"))

// Access style and set style
console.log(value.style)

// Creating new elements using JS
let newbutton = document.createElement("button")    //This will just create element but not add to DOM
newbutton.innerText = "Click This"

//Adding newly created element using JS
let valuediv = document.querySelector("div")
console.log(valuediv)
valuediv.append(newbutton)      //This will add button element to end within select div tag
//valuediv.prepend(newbutton)      //This will add button element to start within select div tag
//valuediv.before(newbutton)      //This will add button element before the start of select div tag
//valuediv.after(newbutton)      //This will add button element after the end of select div tag

//Removing element from DOM using JS
valuediv.remove()       //removing the total above div element