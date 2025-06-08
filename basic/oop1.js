//object literal
const user = {
    username:"sonali",
    loginCount : 5,
    signedIn: true,
    getUserDetails: function()
    {
        //console.log("Got user details from database")
        //console.log(`username:${this.username}`)
        console.log(this)
    }
}
// console.log(user.loginCount)
// //console.log(user.getUserDetails())
// console.log(this)

//constructor

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function()
    {
        console.log(`Welcome ${this.username}`);
    }

return this
}
const userOne = new User("Sonali",12,true)
const usertwo = new User("mishra",20,true)
console.log(userOne.constructor)
//console.log(usertwo)