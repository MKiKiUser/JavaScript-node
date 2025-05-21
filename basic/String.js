
const name = "sona-li"
const repoCount = 50
//console.log(name+repoCount + " Value");
//backtik
console.log(`Hello my is ${name} and my repo ${repoCount}`);
const gameName = new String('sona-li')
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))
 const newstring = gameName.substring(0,4)
 console.log(newstring)

 const anotherstring = gameName.slice(-7,4)
 console.log(anotherstring)
 const newstrone = "  sonali  "
 console.log(newstrone.trim())


 const url = "https://sonali.com%20mishra"
 console.log(url.replace('%20','-'))
 console.log(url.includes('sonali'))
console.log(gameName.split('-'))