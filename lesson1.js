//var declared variable could be reassigned and value could also be modified
//var declared variable Scope is Global
var a = 10
console.log(a)
var a = 20
console.log(a)

var aa          //unassigned are given 'undefined' type
console.log(aa)


//let declared variable could not be reassigned but value could also be modified
//let declared variable Scope is within Block
let b = 10
console.log(b)

b = 20
console.log(b)

let bb          //unassigned are given 'undefined' type
console.log(bb)

{
    let b = 10.11       //same name variable could be redefined as this is within a block and scope is block dependent
    console.log(b)
}
console.log(b)         // but when we print the variable outside the block of code it will show value of gloabally defined 'b' = 20



//const declared variable could not be reassigned and neither value could be modified
//const declared variable Scope is within Block
const PI = 3.14             //usually represented as capital letters
console.log(PI)

// 'const CC' is not possible as const initilization is mandatory

