const promiseOne = new Promise(function(resolve,reject)
{
    // Do an async task
    // Database calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
    })

promiseOne.then(function() {
    console.log("Promise consumed");
})

//Two
new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Async task2");
        resolve()
    },1000)
})
.then(function(){
    console.log("Promise consumed2")
})


const promiseThree  = new Promise(function(resolve,reject)
{
setTimeout(function(){
    resolve({username:"Chai",email:"chai@gmail.com"})
},1000)
})
promiseThree.then(function(user)
{
 console.log(user);
})


const promiseFour =  new Promise(function(resolve,reject){
 setTimeout(function(){
    let error = false
    if(!error){
        resolve({username:"sonali",password:"123"})
    }
    else {
        reject('ERROR:Something went wrong')
    }
 },1000)

})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);

})
.catch(function(error)
{
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"javascript",password:"123"})
    }
    else {
        reject('ERROR:js went wrong')
    }
 },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error)
    {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers()
// {
//     try {

    
//     const response = await fetch('https://api.github.com/users/MKiKiUser')
//     //console.log(response);
//      const data = await response.json()
//      console.log(data);
//     }
//     catch(error)
//     {
//         console.log("E: ",error)
//     }
// }
//getAllUsers()

fetch('https://api.github.com/users/MKiKiUser')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))