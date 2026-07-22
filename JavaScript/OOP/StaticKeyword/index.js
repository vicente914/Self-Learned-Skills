//static -> anything declared static, will belong to the class itself 
// rather than the object, and may only be used by the class itself

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} user online`);
    }

    sayHello(){
        console.log(`Hello! my username is ${this.username}`);
    }

}

const user1 = new User("VinW");
const user2 = new User("MiniVin")

user1.sayHello();
user2.sayHello();
User.getUserCount();