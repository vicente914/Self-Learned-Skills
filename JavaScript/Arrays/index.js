//An array works as a variable than can hold more than one value

let numbers = [1, 2, 3] 

numbers[3] = 4;
//numbers.push(5); adds a value at the end of the array
//numbers.pop(); removes the last value of the array
//numbers.unshift(0); adds a value at the beggining of the array
//numbers.shift(); removes a value from the beggining of the array
//numbers.length; let you see the length of your array

//numbers.indexOf(x); let you see the index in the array of the value you write
//If you try to find a non-existent value with indexOf, it will return -1

//numbers.sort(); sorts the array
//numbers.sort().reverse(); sort the array in reverse order
//
/*
for(let i = 0; i < numbers.length; i++ ){
    console.log(numbers[i]);
}
*/

numbers.sort().reverse();
for(let number of numbers){
    console.log(number);
}