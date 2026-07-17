//While the condition is true, we will repeat code

/*
let username = "";

while(username === "" || username === null){
    username = window.prompt(`Enter your name: `);
}

console.log(`Hello ${username}`);
*/

let loggedIn = false;
let username;
let password;

do{
    username = window.prompt(`Enter your username: `);
    password = window.prompt(`Enter your password: `);

    if(username === "VinW" || password === "123"){
        loggedIn = true;
        console.log("You logged in");
    }
    else{
        console.log("Introduce the correct username or password");
    }
}while(!loggedIn)