//Ternary operator -> let you check a condition in a simplier way than if statements

//example1
let age = 18;
let message = age >= 18 ? "You are and adult" : "You are a minor";
console.log(message);

//example2
let isStudent = true;
let message2 = isStudent ? "You are a student" : "You are NOT a student";
console.log(message2);

//example3
let purchaseAmount = 100;
let discount = purchaseAmount >= 100 ? 10: 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);