//destructuring allow us to extract values from arrays and objects
// then assign them to variables in a convenient way

// [] to perfom array destructuring
// {} to perfom object destructuring

//---------EXAMPLE 1------------
// Swap the value of two variables
/*
let a = 2;
let b = 12;

[a, b] = [b, a];

console.log(a);
console.log(b);
*/

//----------EXAMPLE 2----------
//Swap element in an array
/*
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
*/
//----------EXAMPLE 3----------
//Assign array elements to variables
/*
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/


//------------------ EXAMPLE 4 -------------
// Extract values from objects

const person1 = {
    name: "VinW",
    age: 18,
}

const person2 = {
    name: "MiniVin",
    age: 10,
}

const {name, age} = person2;

//console.log(name);
//console.log(age);


//-----------EXAMPLE 5-----------------
//Destructure n function parameters
function displayPerson({name, age}){
    console.log(`name: ${name}`);
    console.log(`age: ${age}`);
}

displayPerson(person2);