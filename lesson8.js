// Array

let score = [10,15,8,4,19]
console.log(score)
console.log(typeof score)

console.log("first element ", score[0])

score[2] = 12

console.log(score)

for (let idx = 0; idx < score.length; idx++) {
    console.log("element ", idx, " = ", score[idx])
}

for (let scor of score) {
    console.log(scor)
}

for (let scor of score) {
    console.log(scor + 1)
}

// Add value to end of Array
score.push(100)
console.log(score)

//delete from end of Array
let deletedItem = score.pop()
console.log("deletedItem = ", deletedItem)
console.log("Score new array ", score)

//return copy of Array as string
console.log("Score as string ", score.toString())
console.log("Score as string ", score)      //toString returns a copy and not modify the original Array

//Add two Arrays together
let new_score = score.concat(["Yes", "NO"], ["Array2", "Merging"])
console.log(new_score)

// Add value to start of Array
score.unshift("start")
console.log(score)

// Delete value to start of Array
deletedItem = score.shift("start")
console.log(score)
console.log("deleted item = ", deletedItem)

//Slice (end index is not included)
console.log(score.slice(1,3))       //Returns index 1,2 values as end index is not included

//Splice (end index is not included)
deletedItem = score.splice(1,2, "replaced", "secondvalue")     //deletes from index 1. Remove 2 values and replace it with "replaced"
console.log("deleted ", deletedItem)
console.log(score)       //modified Array is returned
