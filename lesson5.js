let score = 80;

// if statement, if-else, if-else if-else

if (score > 50) {
    console.log("You cleared")
} else if (score > 30) {
    console.log("You should study more")
} else {
    console.log("you have failed")
}

// Ternary operators

let result = score > 50 ? "pass" : "fail"
console.log(result)

// Switch operator - use break to end switch case otherwise subsiquent cases are also execute resulting in strange behavior

let color = "blue"
switch (color) {
    case "black":
        console.log("black selected")
        break;
    case "blue":
        console.log("blue selected")
        break;
    case "red":
        console.log("red selected")
        break;
    default:
        console.log("wrong value")
        break;
}