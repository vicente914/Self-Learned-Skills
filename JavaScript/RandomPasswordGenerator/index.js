//Password generator



function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    
    //Here we specify what characters include each type of chars
    //this are the characters that the random generator will include
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!$&?¿¡-_";

    let allowedChars = "";
    let password = "";

    //this is where the random generator include some type of chars depending of what type
    // of chars we wanted to include(if its true then its included)
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 type of characters needs to be selected)`;
    }

    //Generates as many characters as indicated in the length and all of them picking up random
    //chars of the types of chars included
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

//we put our length and booleans variables as the parameter of our function to control
//when we want to include some type of chars
const password = generatePassword(passwordLength, 
                includeLowercase, 
                includeUppercase, 
                includeNumbers, 
                includeSymbols);

console.log(`Generated password: ${password}`);