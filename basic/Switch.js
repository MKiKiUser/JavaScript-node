// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = "march" //3
// switch (month) {
//     case "jan":
//         console.log("Jan")
//         break;
        
//         case "feb":
//             console.log("feb")
//             break;
            
//         case "march":
//             console.log("Mar")
//             break;
//         case "apr":
//             console.log("apr")
//             break;
//         default:
//             console.log("default case match")    
//         break;
// }


const userEmail = []//if block
if(userEmail) 
{
    console.log("Got user email");
}
else 
{
    console.log("Don't have user email");
}

// falsy values 
// --false,0,-0,bigint 0n,"",null,undefined,NaN(not a number)

// truthy
// --"0",'false'," ",[],function(){},{},


///false == 0,false == '',0==''(true)
  //array
  if(userEmail.length === 0)
  {
    console.log("Array is empty")
  }
//object
const emptyobj = {}
if(Object.keys(emptyobj).length === 0)
{
  console.log("Object is empty")
}

//Nullish Coalescing Operator (??): null,undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1)


//terniary operator
//conditon ? true :false 
const ice = 100
ice<=80 ? console.log("less than 80") : console.log("more than 80")