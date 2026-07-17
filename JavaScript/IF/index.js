// If statements, execute some code if a condition is true, if not, do something else

const myAge = document.getElementById("myAge");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");
let age;

mySubmit.onclick = function(){
    age = myAge.value;
    age = Number(age)

    if(age >= 100){
        myResult.textContent = `Your are to old to enter this website`;
    }
    else if(age == 0){
        myResult.textContent = `You were just born`;
    }
    else if(age >= 18){
        myResult.textContent = `Welcome to this website`;
    }
    else if(age < 0){
        myResult.textContent = `Your age cant be below 0`;
    }
    else{
        myResult.textContent = `Your age must be 18+ to enter this website`;
    }
}