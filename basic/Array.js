
const arr = [1,2,3,45]
const myhero =["shaktiman","nah"]
const arr1 = new Array(1,2,3,4,5,6)

console.log(arr[0])

//Array methods

// arr.push(6)
// arr.pop()
// arr.unshift(0)
// arr.shift()
// console.log(arr)

// console.log(arr.includes(3))
// console.log(arr.indexOf(10))

// const arr3 = arr.join()
// console.log(arr3)

//slice,splice

// console.log("A ",arr)
// const myn1 = arr.slice(1,3)
// console.log(myn1)

// console.log("B ",arr)
// const myn2 = arr.splice(1,3)

// console.log("C ",myn2)

const a1 = ["thor","tronman","cfg"]
const dc=["superman","flash","batman"]

// a1.push(dc)
// console.log(a1)
// console.log(a1[3][2])

// const allheros = a1.concat(dc)
// console.log(allheros)

//spread operator

const allhe1=[...a1,...dc]
console.log(allhe1)

const anotherarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanother = anotherarr.flat(Infinity)
console.log(realanother)


console.log(Array.isArray("Sonali"))
console.log(Array.from("Sonali"))

console.log(Array.from({name:"Sonali"}))

let s1 =100
let s2=200
let s3 =300

console.log(Array.of(s1,s2,s3))



