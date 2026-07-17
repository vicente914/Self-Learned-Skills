//String methods allow you  to manipulate and work with strings

let userName = "Vicen           "

//chatAt, returns the char in the position you give
console.log(userName.charAt(0))

//indexOf, returns the first ocurrence of a character you give
console.log(userName.indexOf("V"));

//lastIndexOf, returns the LAST ocurrence of a character you give
console.log(userName.lastIndexOf("V"));

//length, returns the length of your string
console.log(userName.length)

//trim, removes all the white spaces of the string
console.log(userName.trim())

//toUpperCase, returns the whole string in uppercase
console.log(userName.toUpperCase());

//toLowerCAse, returns the whole string in lowercase
console.log(userName.toLowerCase());

//repeat, repeats the string an many times as you indicate
console.log(userName.repeat(2));

//startsWith, returns true or false depending on if a string starts with a given character
console.log(userName.startsWith(" "));

//endsWith, returns true or false depending on if a string ends with a give character
console.log(userName.endsWith(" "));

//includes, return true or false depending on if a string contains a given character
console.log(userName.includes(" "));

//replaceAll, replaces one given character on the entire string by another given character
console.log(userName.replaceAll(" ",""));

//padStart, let you specify how long a string should be, letting you fill the start of the string with a given character
console.log(userName.padStart(20, "0"));

//padEnd, works exactly like padStart method, but fill the string at the end
console.log(userName.padEnd(20, "0"));