//Map method, accepts a callback and applies the function to each element of an array
//then returns a new array
//It is similar to the forEach method, but, the difference is that the map method, returns
//a whole new array after applying the function to each element of the original array
/*
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(double);
const squares = numbers.map(square)

console.log(numbers);
console.log(doubles);
console.log(squares);  

function double(i){
    return i * 2;
}

function square(i){
    return Math.pow(i, 2);
}
*/

const dates = ["2024-12-30", "2015-11-2", "2025-11-22"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);


function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
