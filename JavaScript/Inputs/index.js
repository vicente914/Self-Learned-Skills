//How to accept user input

//First way
/*
let username = window.prompt("Write here your username");
console.log(username);
*/

//Second way
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myUsername").value;
    document.getElementById("myWelcome").textContent = `Welcome ${username}`;
}