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

    //This is called Override, used to change the inherited method behaviour
    makeNoise(){
        console.log(`The ${this.name} meows`);
    }
}