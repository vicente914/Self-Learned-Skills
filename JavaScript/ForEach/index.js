//forEach(), a method used to iterate over the elements of an array and apply 
//a specified function (callback) to each element


let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize)
fruits.forEach(display);

function toUppercase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}