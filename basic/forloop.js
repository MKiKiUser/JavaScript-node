//iterations
 
//for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    //if(element == 5)
    {
       // console.log("5 is best number")
    }
   // console.log(element)
    
}
for (let index = 0; index <=10; index++) {
   // console.log(`outer loop value : ${index}`);
    for (let i = 0;i <= 10; i++) {
       // console.log(`Inner loop value ${i} and inner loop ${index}`)
        //console.log(index + '*' + i + '=' + index*i);
    }    
}

let myarray = ["flash","Batman","superman"]
//console.log(myarray.length)
for (let index = 0; index <= myarray.length; index++) {
    const element = myarray[index];
    //console.log(element)
    
}

//break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("detected 5")
        break
    }
    console.log(`Value of index is ${index}`);

    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("detected 5")
        continue
    }
    console.log(`Value of index is ${index}`);

    
}