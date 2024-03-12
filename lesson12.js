//object and classes

const student = {
    fullName : "Varun",
    marks : 99,
    printMarks : () => {
        console.log(this.marks)     //this is used to access elements within same object/class
    }
}
console.log(student)      //this object will have prototype object assigned to it automatically/by deafult

//use of prototype and assigning value
const studentproto = {
    getsubject () {
        console.log("sub1, sub2, sub3")
    }
}

const newstudent = {
    fullName : "Student 1"
}
newstudent.__proto__ = studentproto     //assigning prototype, ususally reference to an object
console.log(newstudent.getsubject())    

//if function name is same in prototype and object. Higher precendence is to gievn to object function
const newstudent2 = {
    fullName : "Student 2",
    getsubject () {
        console.log("sub11, sub12, sub13")
    }    
}
newstudent2.__proto__ = studentproto     
console.log(newstudent2.getsubject())       //this time functiion with the object would be called rather than the prototype function


// Classes
// Class declaration and object creation
class employee {
    joined () {
        console.log("employee Joined the company")
    }
    left () {
        console.log("employee left the company")
    }
}

let emp1 = new employee()     //object creation from class
emp1.joined()


class employee2 {
    setsalary(salary){
        this.salary = salary
    }
}

let emp2 = new employee2()
emp2.setsalary(2000)        //setting propertly value inside a class 
console.log(emp2.salary)

// constructor in Class
class employee3 {
    constructor () {
        console.log("Constructor called automatically on object creation")
    }
    setsalary(salary){
        this.salary = salary
    }
}

let emp3 = new employee3()

// setting value with constructor in Class
class employee4 {
    constructor (salary) {
        console.log("New Constructor called automatically on object creation")
        this.salary = salary
    }
    checkSalary() {
        return this.salary
    }
}

let emp4 = new employee4(3000)
console.log("salary of above object is ", emp4.checkSalary())

// Inheritance in Class
class employee5 extends employee4 {
}

let emp5 = new employee5(1000)
console.log(emp5.checkSalary())

// In case of same name function child class function is given preference
class employee6 extends employee4 {
    checkSalary() {
        return this.salary + 20
    }
}

let emp6 = new employee6(1000)
console.log(emp6.checkSalary())
