//An object represents a real object that may have some attributes


const person1 = {
    name: "VinW",
    age: 18,
    student: true,
    sayHello: function(){console.log("Hello! I am VinW")},
}

const person2 = {
    name: "MiniVin",
    age: 10,
    student: true,
    sayHello: () => console.log("Hello! I am MiniVin"),
}

console.log(person1.name);
console.log(person1.age);
console.log(person1.student);
person1.sayHello();

console.log("------------------")

console.log(person2.name);
console.log(person2.age);
console.log(person2.student);
person2.sayHello();