//loops

//for loop

sum = 0
for (let i = 1; i <=5; i++) {
    //console.log(i, " run")
    sum = sum + i
    // scope of i ends in the body of the for loop
}

console.log(sum)

//while loop
let i = 0
while (i <= 5) {
    console.log(i, " run")
    i++
}

//do-while loop
let j = 0
do {
    console.log(j, " run")
    j++
} while (j <= 5)

let z = 10      //Condition would not satify still the loop with run at least once as condition would be checked at the end
do {
    console.log(z, " run")
    z++
} while (z <= 5)

//for - of loop

fullname = "Mike Tyson"
for (let val of fullname) {
    console.log(val)
}

//for - in loop (used for ubjects)

let employee = {
    fullname : "Varun Rao",
    age : 32,
    experience : 10.5,
    isworking : true
}

for (let val in employee) {
    console.log("key = ", val, " value = ", employee[val])
}