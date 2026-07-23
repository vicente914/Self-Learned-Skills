//super, it is a similar keyword to this, super allows you to interact with 
// methods/attributes of the parent class
//              this --> the current class
//              super --> the parent class

class Animal{

   constructor(name, age){
    this.name = name;
    this.age = age;
   }

   move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}km/s`);
    }
}

class Dog extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

     swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Bird extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

     fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const dog = new Dog("dog", 5, 30);
const fish = new Fish("fish", 1, 35);
const bird = new Bird("bird", 2, 20);

dog.run();
fish.swim();
bird.fly();