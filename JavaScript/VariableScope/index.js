//Variable scope
//When a variable is recognized and accesible(local or global)

let x = 3; //global scope

function function1(){
    let x = 1; //local scope
    console.log(x);
}

function function2(){
    let x = 2; //local scope
    console.log(x);
}

//Usually, there cant exist two variables with the same name, but, in this example
//the functions cant see inside other functions, so you cant always repeat variables
//names if they are on different functions