//The spread operator allows you to create copy or merge objects/arrays/strings 
//also expanding them into seperate elements


const numbers = [1, 2, 3];
let maximum = Math.max(...numbers);//Math.max takes the array and not the values it contains
//But if we use the spread operator, it unpacks the array, letting Math.max work
console.log(maximum);

let username = "VinW";
let letters = [...username];

console.log(letters);


//We can copy
let fruits = ["apple", "banana", "orange"];
let newFruits = [...fruits];

console.log(newFruits);

//We can merge
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables];
console.log(foods);