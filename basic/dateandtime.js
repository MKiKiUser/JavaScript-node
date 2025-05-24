// Date is object
let mydate = new Date();
console.log(mydate.toDateString());

//YYYY-MM-DDTHH:mm:ss.sssZ

console.log(mydate.toISOString())
console.log(mydate.toJSON())

console.log(mydate.toLocaleString('en-IN',{ timeZone: 'Asia/Kolkata' }))
console.log(typeof(mydate))


//let mycreatedate = new Date(2025,0,21)
let mycreatedate = new Date(2025,0,21,5,3)
//console.log(mycreatedate.toDateString())
console.log(mycreatedate.toLocaleString())


let newdate = new Date("2023-01-14")
//console.log(newdate.toLocaleString())


let myTimeStamp = Date.now()   // milisec
console.log(myTimeStamp)
console.log(newdate.getTime())
console.log(Math.floor(Date.now()/1000)) //sec


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() +1)
console.log(newDate.getDay())


console.log(newdate.toLocaleString('default',{weekday: "long"}))
