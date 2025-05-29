const user = {
    username:"sonali",
    prince:999,
    welcomeMessage:function()
    {
        console.log(`${this.username} ,welocome to website`)
        console.log(this)

    }
}
// user.welcomeMessage()
// user.username = "sona"
// user.welcomeMessage()
//console.log(this)
//function chai()
// {
//     let username = "sonali"
//     console.log(this.username)
// } 
// chai()

// const chai = function()
//  {
//     let username = "sonali"
//     console.log(this.username)
//  }

 const chai = () => 
  {
     let username = "sonali"
     console.log(this.username)
  }
 //chai()

//  const addTwo = (num1,num2) => {
//     return num1+num2
//  }
 //const addTwo = (num1,num2) => num1+num2
 //const addTwo = (num1,num2) => (num1+num2)
 const addTwo = (num1,num2) => ({username:"sonali"})
 
 
 console.log(addTwo(3,4))


 const myArray = [2,5,3,7,9]
 //myArray.forEach(function () {})
 //myArray.forEach(() => ())
 myArray.forEach(() =>{})