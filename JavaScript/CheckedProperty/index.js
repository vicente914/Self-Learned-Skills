const myCheckBox = document.getElementById("myCheckBox");
const visa = document.getElementById("visa");
const masterCard = document.getElementById("masterCard");
const payPal = document.getElementById("payPal");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`
    }
    else{
        subResult.textContent = `You are NOT subscribed!`
    }

    if(visa.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCard.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPal.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}