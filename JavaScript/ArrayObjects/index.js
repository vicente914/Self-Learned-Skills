//Array of objects


const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pinneapple", color: "yellow", calories: 37}];

//console.log(fruits[0].name);

//FOR EACH
fruits.forEach(fruit => console.log(fruit.name));


//MAP
const fruitColors = fruits.map(fruit => fruit.color);

console.log(fruitColors);

//filter
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");

console.log(yellowFruits);

//recude
const maxFruits = fruits.reduce( (previous, next) => previous.calories > next.calories? previous : next);

const minFruits = fruits.reduce( (previous, next) => previous.calories < next.calories? previous : next);

console.log(maxFruits);
console.log(minFruits);
