//Counter program

const increaseButton = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");
const decreaseButton = document.getElementById("decreaseButton");
const myNumber = document.getElementById("myNumber");

let number = 0;

increaseButton.onclick = function(){
    number++;
    myNumber.textContent = number;
}

resetButton.onclick = function(){
    myNumber.textContent = 0;
}

decreaseButton.onclick = function(){
    number--;
    myNumber.textContent = number;
}
