// variable 

// let | var | const 

// var we can declare multiple time with same variable name the value will be update

// in let we can't decleare variable multiple times it will throw the Exception it is block based variable 

// in const we can't chnage the value also we cant declare the values

var name =`chetan`;
let age = 20
const ID = 444
let isPass = true 
let job = null
let role = undefined

function isStudentPass() {   
    if (isPass === true) {
        return `is pass with good grades`
    } else {
        return `is not pass`
    }
}


console.log(`My name is ${name} and i am ${age} year old My class is is ${ID
}`)

console.log(` ${name} ${isStudentPass()} the job is ${job} and the role for the job ${role}`)