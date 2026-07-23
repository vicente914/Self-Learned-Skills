//Getters and Setters are special methods made to stablish 
// and return some attributes from the class


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    set name(newName){
        if(typeof newName === "string" && newName.length > 0){
            this._name = newName;
        }
        else{
            console.error("The name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }
}



const person1 = new Person("VinW", 18);

console.log(person1.name);
console.log(person1.age);