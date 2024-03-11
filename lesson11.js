//Events

let btn1 = document.querySelector("#button1")
btn1.onclick = () => {
    console.log("button1 is clicked")
}

btn1.onmouseover = () => {
    console.log("curson hovered over button1")
}

//Event object and properties
btn1.onmouseover = (event) => {
    console.log("curson hovered over button1")
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.clientX, event.clientY)
}

//Event listener
let btn2 = document.querySelector("#button2")

btn2.addEventListener("click", () => {
    console.log("button 2 clicked 1st")
})

btn2.addEventListener("click", (evt) => {
    console.log("button 2 clicked 2nd")
    console.log(evt.target)
})
//declaring fucntion helps in removing eventlistenere whenever required in future
const handler3 = () => {
    console.log("button 2 clicked 3rd")
}

btn2.addEventListener("click", handler3)
btn2.addEventListener("click", () => {
    console.log("button 2 clicked 4th")
})

//removing event listener
btn2.removeEventListener("click", handler3)