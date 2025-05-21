//stack used in primitive,copy
//heap used in Non primitive,to get reference ,original
let aname = "sonali" 
let anoname = aname
anoname ="me"
console.log(aname)
console.log(anoname)
let userone ={
    email:"sonali@gmail.com",
    id : "user@ybl"
}
let userTwo = userone
userTwo.email = "hits@gmail.com"
console.log(userone.email)
console.log(userTwo.email)
