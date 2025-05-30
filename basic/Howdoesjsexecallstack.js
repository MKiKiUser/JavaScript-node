//How does javascript execute code + call stack
//js is single threaded
//javascript Execution Context -- means how its run its run in two phase
//global ec(this),function execute context,eval ec


// js code run in two phase
//1)Memory creation phase --> it alocate place for variable,its not ece
//2)execution phase --> it excute

let v1=10
let v2=5
function addnum(n1,n2){
    let t=n1+n2
    return t
}
let result = addnum(v1,v2)
let result2 = addnum(10,2)

//step1--global execution it alocate inside this keyword
//step2 memory phase -- it collect all varible and keep
//val1 --undefined,val2--undefined
//addnum--defination
//result1--undefined
//result2--undefined
//step execution phase
// val1--10
// val2--5
// addnum--- it create new varible environment+execution thread
// again memory phase
// i)val1--undefined,ii)val2--undefined iii)total--undefined

// execution phase n1=10,n2=5,total--15
// it return in global exe



//*******call stack ***********/

function one(){
    console.log("one")
}
function two()
{
    console.log("two")
}
function three()
{
    console.log("three")
}
one()
two()
three()