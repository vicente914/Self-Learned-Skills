//Number guessing game
const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * 101) + 1;
//console.log(answer);


let attempts = 1;
let guess;

while(!guess){
    let attempt = window.prompt(`Guess the number(between 1-100)`);
    attempt = Number(attempt);

    
    if(isNaN(attempt)){
        window.alert("Please enter a valid number");
    }
    else if(attempt < minNumber || attempt > maxNumber){
        window.alert("Please enter a valid number");
    }
    else if(attempt < answer){
        window.alert("The number you are looking for is bigger");
        attempts++;
    }
    else if(attempt > answer){
        window.alert("The number you are looking for is smaller");
        attempts++;
    }
    else if(attempt == answer){
        window.alert("Congratulations, you just won!!");
        window.alert(`Attempts needed: ${attempts}`);
        guess = true;
    }
}