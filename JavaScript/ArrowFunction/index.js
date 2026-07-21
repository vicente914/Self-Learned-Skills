//Arrow functions, a concise and shorter way to write function expressions

const numbers = [1, 2, 3, 4, 5];

const doubles = numbers.map( (element) => element * 2);
const squares = numbers.map( (element) => Math.pow(element, 2));
const evenNums = numbers.filter( (element) => element % 2 === 0);
const oddNums = numbers.filter( (element) => element % 2 !== 0);
const total = numbers.reduce( (previous, next) => previous + next);

console.log(numbers);
console.log(doubles);
console.log(squares);
console.log(evenNums);
console.log(oddNums);
console.log(total);