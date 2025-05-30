//logic flow or control flow
//if
const isuser = true
const temp=50
if(temp<60)
    {
        console.log("less than 60")

}
console.log("temp is grater")
//<,>,<=,>=,==,!=,===
// const score =200
// if(score>100)
// {
//     const power ="fly"
//     console.log(`user power:${power}`)
// }
// console.log(`user power:${power}`)



// const balance =1000
// //if(balance>500) console.log("test"),console.log("test2");
// if(balance<500)
// {
//     console.log("less than")
// } else if(balance < 750)
// {
//     console.log("less than 750")
// }
// else if(balance<900)
// {
//     console.log("less than 900")
// }
// else {
//     console.log("less than 1200")
// }

const userlogin= true
const debitcard =true
const loggedInfromgoogle = false
const looggedfromEmail = true
if(userlogin && debitcard)
{
    console.log("Allow to buy course")
}
if (loggedInfromgoogle||looggedfromEmail)
{
    console.log("User logged in")
}