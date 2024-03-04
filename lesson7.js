//string oprations

let fullname = "Varun Rao"
console.log("string is ", fullname)
console.log("length of string is ", fullname.length)
console.log("fullname[3] ", fullname[3])

//Template literals - They could have placeholder for variables between ``
let result = `Fullname is ${fullname}`
console.log(result)
console.log(`sum is calculated ${1+2+3}`)

//escape characters
console.log("line1\nline2")
console.log("line1\tline2")

//string methods
console.log("Varun Rao".toUpperCase())
console.log("Varun Rao".toLowerCase())
console.log("Varun Rao  ".trim())

console.log("Varun Rao".slice(1,4))
console.log("Varun Rao".concat(" again"))
console.log("Varun Rao".replace("Rao", "aaa"))
console.log("Varun Rao".charAt(1))
