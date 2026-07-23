//Nested objects are objects inside of other objects

/*
const person = {
    name: "VinW",
    age: 18,
    student: true,
    hobbies: ["taekwondo", "drawing", "reading"],
    address: {
        country: "Spain",
        city: "Granada"
    }
}

console.log(person.name);
//console.log(person.address.country);

for(const property in person.address){
    console.log(person.address[property]);
}
*/


class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters");
const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person3.address.street)