//for of

["","",""]
[{},{},{}]

const arr = [1,2,3,4,5]
for (const element of arr) {
    console.log(element)
    
}

const greetings ="Hello world!"
for(const greet of greetings){
console.log(`Each char is ${greet}`)
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('use',"united states of america")
map.set('fr',"france")
map.set('fr',"france")
//console.log(map)
 for(const [key,value] of map)
 {
    console.log(key,':-',value)
 }

 const myObject = {
    game1:'NFS',
    game2:'spiderman'
 }
//  for(const [key,value]  of myObject)
//  {
//     console.log(key,':-',value)
//  }

const myobject = {
    js:'javascript',
    cpp:'C++',
    rb:"rubby",
    swift:"swift by apple"
}

   for(const key in myobject) {
        console.log(`${key} shortcut is for ${myobject[key]}`)
    }
 const programming=["js","rb","py","java","cpp"]
 for (const key in programming) {
    
       console.log(programming[key]) 
    }
 

    // ******in map we should not used for in loop*****

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach (function (item) {
//     console.log(item)
// } )

// coding.forEach( (item) => {
//     console.log(item)
// } )

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })


const mycoding = [
    {
        langname : "javascript",
        langfilename:"js"
    },
    {
        langname : "java",
        langfilename:"ja"
    },

{
    langname : "python",
    langfilename:"js"
},
]
mycoding.forEach((item) => {
    console.log(item.langname)
})