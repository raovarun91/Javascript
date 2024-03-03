
// Comparison operators

// 1. Equal to operator
let a = 5
let b = 2
let c = 5
let d = "5"
console.log("a = ", a)
console.log("b = ", b)
console.log("c = ", c)
console.log("d = ", d)
console.log("a == b ", a == b)
console.log("a == b ", a == c)

console.log("a == b ", a == d)      //string and number could be compared using == operator

// 2. Not Equal to operator

console.log("a != b ", a != b)
console.log("a != c ", a != c)

console.log("a != d ", a != d)

// 3. Equal to and type operator
console.log("a === b ", a === b)
console.log("a === c ", a === c)

console.log("a === d ", a === d)    //In this case the type mismatch results in false for the === operator as one is int and one string

// 4. Not Equal to and type operator
console.log("a !== b ", a !== b)
console.log("a !== c ", a !== c)

console.log("a !== d ", a !== d)    //In this case the types are different and thus it treats 5 and "5" differently


