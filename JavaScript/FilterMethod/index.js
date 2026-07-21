//filter(), creates a new array by filtering out elements
// by the way you want

const ages = [16, 17, 18, 19, 20, 22, 29, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}