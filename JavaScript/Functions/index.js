//Functions are sections of code that you can resuse

function add(x, y){
    let result = x + y;
    return result;
}

function substract(x, y){
    let result = x - y;
    return result;
}

function multiply(x, y){
    let result = x * y;
    return result;
}

function divide(x, y){
    let result = x / y;
    return result;
}

function isEven(number){
    let result = false;
    if(number / 2 === 0){
        result = true;
    }

    return result;
}

function isValidEmail(email){
    let isValid = false;
    if(email.includes("@")){
        isValid = true;
    }

    return isValid;
}

console.log(isValidEmail("Vinwgmail.com"));