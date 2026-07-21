//this, reference to the object where THIS is used
//      (the object depends on the immediate context)
//      person.name = this.name


const person1 = {
    name: "VinW",
    age: 18,
    student: true,
    sayHello: function(){console.log(`Hello! I am ${this.name}`)},
}

const person2 = {
    name: "MiniVin",
    age: 10,
    student: true,
    sayHello: function(){console.log(`Hello! I am ${this.name}`)},
}

person1.sayHello();
person2.sayHello();