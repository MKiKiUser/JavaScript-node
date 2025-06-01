const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) => {
//     console.log(item)
// })

//     console.log(values) foreach loop doesnt return value

//const mynum =[1,2,3,4,5,6,7,8,9,10]
//const newNums = mynum.filter((num => num>4))

//or const newNums = mynum.filter((num) => {
    //return num>4})

// const newNums =[]
// mynum.forEach((num) => {
//     if(num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums)

//const books = [{title:'Book one',genre:'Fiction',publish:1981,edition:2004},
//     {title:'Book two',genre:'Non-fiction',publish:1992,edition:2008},
//     {title:'Book three',genre:'Non-fiction',publish:1993,edition:2006},
//     {title:'Book four',genre:'fiction',publish:1994,edition:2001},
//     {title:'Book five',genre:'Non-fiction',publish:1995,edition:2002},
//     {title:'Book six',genre:'history',publish:1996,edition:2009},
//     {title:'Book seven',genre:'fiction',publish:1997,edition:2003},
//     {title:'Book eight',genre:'Non-fiction',publish:1998,edition:2011},
// ]

//const userBooks = books.filter( (bk) => bk.genre === 'history')
// const userBooks = books.filter((bk) => bk.publish>=1996 && bk.genre === 'history')
// console.log(userBooks)

 const myNumber = [1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumber.map((num) => num+10)
// console.log(newNums)


const newNums = myNumber.map((num) => num*10).map((num) => num +1).filter((num) => num>=40)
//console.log(newNums)


//reduce

const myarr = [1,2,3]

// const myTotal = myarr.reduce(function (acc,curval) {
//     console.log(`acc:${acc} and currval:${curval}`)
//     return acc+curval
// },2)
const myTotal = myarr.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal)

const shoppingcart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"java course",
        price:4999
    },
    
    {
        itemName:"python course",
        price:3999
    },
    
]
const addshopping = shoppingcart.reduce((acc,val)=>acc+val.price,0)
console.log(addshopping)


