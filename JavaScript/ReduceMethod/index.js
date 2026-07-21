// reduce(), reduce the elements of an array to a single value


//SUM example
const prices = [5, 50, 25, 10, 15, 30];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);


function sum(previous, next){
    return previous + next;
}


//MAX/MIN example
const grades = [5, 6, 1, 7, 8, 9, 10, 2];

const maxGrade = grades.reduce(findMax);
const minGrade = grades.reduce(findMin);

console.log(maxGrade);
console.log(minGrade);

function findMax(previous, next){
    return Math.max(previous, next);
}

function findMin(previous, next){
    return Math.min(previous, next);
}

