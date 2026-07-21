//Function expressions, a way to define functions as values or variables

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(function(element){
    return  Math.pow(element, 2)
});

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

const total = numbers.reduce(function(previous, next){
    return previous + next;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);