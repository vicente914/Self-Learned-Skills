//callback -> a function passed as an argument to another function
//After a process is done, executes the next one


sum(displayPage, 1, 2);


function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayResult(result){
    console.log(result);
}


function displayPage(result){
    document.getElementById("myH1").textContent = result;
}
