//Random Number Generator


const myNumber = document.getElementById("myNumber");
const myRoller = document.getElementById("myRoller");
const min = 1;
const max = 10;

let randomNum;

myRoller.onclick = function(){
    randomNum = Math.floor(Math.random()* max) + min;
    myNumber.textContent = randomNum;
}













//Math.random alone gives you  a number beetwen 0 and 1, so if you want bigger range of numbers
// I will multiple Math.random with for example, 101, so I will have a range between 0 and 100
/*
const min = 25;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min))+min;

console.log(randomNum);
*/

