//sort method, sorts element as stringin lexicographic order 
// , not alphabetical
// lexicographic = (alphabet + numbers + symbols)

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b); //returns either a positive or negative number and it will sort
                                // depending on what number it returns

console.log(numbers);


const people = [{name: "VinW", age: 18, gpa: 3.0}, 
                {name: "MiniVin1", age: 10, gpa: 1.5}, 
                {name: "MiniVin2", age: 8, gpa: 2.0},
                {name: "MiniVin3", age: 6, gpa: 4.0}];

people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people);