// singleton if we are creating form constactor ex:Object.create
// object literal below
    

const mysym=Symbol("key1")
const jsuser = {
    name:"sonali",
    "full name":"sonalimishra",
    age:18,
    [mysym]:"mykey1",
    location:"Hyderabad",
    email:"sonali@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysym])
console.log( typeof jsuser[mysym])

jsuser.email = "mishra@gmail.com"
//Object.freeze(jsuser)
jsuser.email="micrsoft@gmail.com"
console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello js uder")
}
jsuser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())


//singleton
const tenderUser = new Object()

tenderUser.id ="123acb"
tenderUser.name="sona"
tenderUser.isLoggedIn=false
//console.log(tenderUser)

const regularUser ={
    email:"sona@gmail.com",
    fullname:{
        userfull:{
            firstnamr:"sonali",
            lastname:"mishra"
        }
    }
}
console.log(regularUser.fullname.userfull)


const o1 ={1:"a",2:"b"}
const o2={3:"c",4:"d"}

//const o3={o1,o2}
//const o3 =Object.assign({},o1,o2)

const o3={...o1,...o2}
console.log(o3)

const u1 = [
    {
        id:1,
        email:"son@gmail"
    },
    {
        id:1,
        email:"son@gmail"
    },
    {
        id:1,
        email:"son@gmail"
    },
    
]
u1[1].email

console.log(tenderUser)

console.log(Object.keys(tenderUser))
console.log(Object.values(tenderUser))
console.log(Object.entries(tenderUser))

console.log(tenderUser.hasOwnProperty('isLoggedIn1'))



//destruction
const course ={
    courseName:"so",
    price:"999",
    coreinte:"am"
}
//course.price
const {price:p} = course
console.log(p)

const navbar = () => {
    
}


