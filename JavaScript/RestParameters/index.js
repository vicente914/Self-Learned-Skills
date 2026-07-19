//Rest parameters
//allow a function work with a variable number of parameters by bundling the parameters into an
//array


/*
function printStudentNames(...students){
    console.log(students);
}

function getStudentNames(...students){
    return students;
}

const student1 = "VinW";
const student2 = "Gabriel";
const student3 = "Pepe";


printStudentNames(student1, student2, student3);

const students = getStudentNames(student1, student2, student3);
console.log(students);
*/

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3);

console.log(`Your total is ${total}`);

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return Math.floor(result / numbers.length);
}

const totalAverage = getAverage(55, 30, 10, 15, 11, 99, 8, 1, 120);
console.log(`Your total average is ${totalAverage}`);