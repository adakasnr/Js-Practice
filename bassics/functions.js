// function helps us to reuse the code, when we have same task to perform at multiple situation we can create a function and use

// Syntax
function name(params) {
    
}

/*
name- function name
params-> we can pass information into the parenthesis
{}-> everything inside this curly bracket will run when we call the function 
*/

function names() {
    return "Siva"[0];
}
var data = names();
console.log("data-",data);


function railWayTime(time,amORpm) {
    if (amORpm==="am") {
        railway = 0+time
    } 
    else if(amORpm==="pm"){
        railway = 12+time
    }
    return railway
}
console.log(railWayTime(3,"pm"));
