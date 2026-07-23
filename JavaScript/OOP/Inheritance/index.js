//inheritance => allow other classes to inherit properties and methods 
// from an existing class (parent -> child)

class Animal{

    alive = true;

    makeNoise(){
        console.log(`The animal made a noise`)
    }
}

class Cat extends Animal{
    name = "cat";

    //When a child class inherits from their parent class, you may modify the behaviour 
    // of the methods if you want to.
    makeNoise(){
        console.log(`The ${this.name} meows`);
    }
}