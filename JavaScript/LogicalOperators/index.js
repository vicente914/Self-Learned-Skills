//Logical operators

//AND = &&
//OR = ||
//NOT = !


const temp = 500;
if(temp > -15 && temp < 35){
    console.log("The temperature is bad");
}
else{
    console.log("The temperature is good")
}


const temp2 = 20;

if(temp < -15 || temp > 35){
    console.log("The temperature is bad");
}
else{
    console.log("The temperature is good")
}


const isMinor = true;

if(!isMinor){
    console.log("You are NOT a minor");
}
else{
    console.log("You are a minor");
}