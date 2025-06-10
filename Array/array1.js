const myArr = []
//%DebgPrint(myArr)
//element kind:packed smi elements
//types of array:continious,holey

//kind of optimization (i)SMI (small integer),
//packed element,
// Double (float,sting,function)

const arrTwo = [1,2,3,4,5]//(packed smi elements or continious it is best type)
arrTwo.push(6.0)//packed_double element
arrTwo.push('7')
//packed element

arrTwo[10] = 11 //Holey elements
console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9])

// bound check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(Object.prototype,10)
//holes are very expensive in javascript

const arrThree = [1,2,3,4,5]
console.log(arrThree[2])


//SMI>DOUBLE>PACKED
//h_smi>h_double>h_packed

const arrFour = new Array(3)
//just 3 holes. HOLEY_SMI_ELEMENTS

arrFour[0] = '1' //holey_elements
arrFour[1] = '2' //holey_elements
arrFour[2] = '3' //holey_elements

const arrFive = [] //SMI
arrFive.push('1') //paced elements
arrFive.push('2') //paced elements
arrFive.push('3') //paced elements

const arrSix = [1,2,3,4,5]
arrSix.push(NaN )//or infinity)//paced double

// for,for of,forEach
