


function myfunct(){
    console.log("H")
    console.log("S")
    console.log("O")
    console.log("M")
    console.log("K")
    console.log("I")
}

//myfunct()
// function addtwono(n1,n2){ //parameter
// console.log(n1+n2)
// }


 function addtwono(n1,n2){ //parameter
let result = n1+n2
console.log("sonali")
return result

}
const result=addtwono(3,5)
// addtwono(3,"4")
// addtwono(3,"a")
// addtwono(3,null)//arg
//console.log("result :" ,result)


function loginusermessage(username){ //username=sonali
    if(username == undefined) //if(!username)
    {
        console.log("please enter name")
        return

    }
    return `${username} just loggin`
}
//console.log(loginusermessage("sonali"))

console.log(loginusermessage())



