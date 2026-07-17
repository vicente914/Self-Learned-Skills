//string.slice let you create substrings from portions of another string

const fullName = "Vicente Gabriel";
/*
let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(8, 15);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(14);

console.log(firstName);
console.log(lastName);
console.log(`First character: ${firstChar}`);
console.log(`First character: ${lastChar}`);
*/

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

const email = "vicen@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
