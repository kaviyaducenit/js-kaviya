// primitive-strings,number,boolean,Symbol
// reference -objects,array
// values:special value=null,not-null,undefined,nan

let a='kaviya'
console.log(a.length)
//returns length of a
//output =6
let b='ravi'
console.log(a.concat(b))
//returns concatenation
//output =kaviyaravi
let text = "geeks for geeks."
result = text.endsWith('for geeks') 
console.log(result)
//returns string ending with given text
//output=false
const arr=[1,2,3]
console.log(arr.includes(2))
//returns boolean by checking of the entry
//output=true
console.log(b.indexOf('i'))
//returns index of particular letter
//output=3
console.log(text.lastIndexOf('geeks.'))
//returns index of particular string
//output=10
console.log(a.repeat(3))
//returns repeation of te given string 
//output=kaviyakaviyakaviya
console.log(b.replace(a))
console.log(a.replace(/v/g,'i'))

//replace one string by another
//output=ravi
var n=text.search("for")
console.log(n)
//returns the index
//output=6
var m=a.slice(0,2)
console.log(m)
//returns the string which is present in between 
//output=ka
var g=a.split("a")
console.log(g)
//returns the string by spliting the given string/character
//output= ["k", "viy", ""]
console.log(a.startsWith("ka"))
//returns boolean with condition stating starting with particular letter string
//output=true
console.log(a.substr(0,3))
//returns substring
//output=kav
console.log(a.substring(0,4))
console.log(a.substring(3))
//returns substring from strings
//output=kavi
console.log(a.toLowerCase())
// toLowerCase
//output=kaviya
console.log(a.toUpperCase())
//to toUpperCase
//output=kaviya
let d="          left"
console.log(d.trim())
//remove spaces
//output=left






  
