
console.log("2">1)
console.log(null>0)
console.log(null==0)
console.log(null >=0) // true
console.log(undefined==0) // false in all case
// ===
console.log("2" === 2)
// primitive call by value
// js is dynamically typed at runtime
const score =100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid)
const  bigNumber = 46790234567897467n
// Referese (Non primitive):Object,Function,Array
//In this all is function type and function is function object
const heros = ["shaktiman","naagraj","daga"]
let myObj = {
    name:"sonali",
    age: 22,
}

const myFunction = function() { 
    console.log("Hello world");
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myObj)


