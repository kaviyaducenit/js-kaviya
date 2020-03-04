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

/*-------------------------------------------------------*/
//numbers
//number methods
let v=23.5732
console.log(v.toFixed(2))
//rounding off the number upto a specified decimal points
//output=23.57
console.log(v.toExponential())
//converting to exponential from
//output=2.35732e+1
console.log(v.toString())
//converting to string
//output=23.5732
console.log(v.toString(2))
//binary
//output=10111.1001001010111101001111000011011000010001001101
console.log(v.toString(8))
//octal
//output=27.4453647415410464
console.log(v.toString(16))
//hexa
//output=17.92bd3c361134

/*----------------------------------------------------------*/
//Global methods
console.info("hey kaviya")
//to view the msg in console 
//output=hey kaviya
console.warn("warning!!!!")
//warns in the console
//output=warning!!!!
console.error("you have an error")
//error msg will be displayed
//output:you have an error
console.table(["A", "B", "C"]);
//writes a table in the console view
//alert("hai monika");
//alert box msg will be printed 
//prompt("hai kaviya ,wish u all luck,hoiw much r u expecting?");
//it prompts the visitor for input
//confirm("hai ")
//displays box with ok and cancel option
console.log(Number(1))
//displays boolean value of 1
console.log(Number(true))
//displays boolean value of 1
console.log(isNaN('ujhgvhf'))
//displays bolean of whether it is true or false
//output=true
console.log(parseInt("123")+parseInt("123"));
//converts string to input
//output=246
console.log(parseFloat("123.123")+parseFloat("123.456"));
//converts string to input
//output=246.579
var x1=Boolean(123);
var x2=Boolean('KAVIYA');
var res =String(x1)+String(x2);
console.log(res);
//checks the boolean value and it is passed as string and displayed
//truetrue










  
