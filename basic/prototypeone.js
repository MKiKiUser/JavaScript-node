// let myname = "sonali  "
// console.log(myname.truelength)

let myheros = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderma}`)
    }
}
Object.prototype.sonali= function(){
    console.log('sonali is present in all object')
}
Array.prototype.mishra = function(){
    console.log('sonali say hello')
}
//heroPower.sonali()
//myheros.sonali()
//myheros.mishra()
//heroPower.mishra()

// inheritance
const User = {
    name:"chai",
    email:"google@@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const teachsup = {
    isAvailable:false
}
const ts = {
    makeass:'js notes',
    fullTime:true,
    __proto__:teachsup
}
Teacher.__proto__= User

//modern syntax
Object.setPrototypeOf(teachsup,Teacher)

let anotherusername = "chaiaurcode     "
String.prototype.trueLength = function()
{
    console.log(`${this}`);
   // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
    anotherusername.trueLength()
    "sonali".trueLength()
    "icetea".trueLength()
