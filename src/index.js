/* Imports ----------------------------------------------------------------- */

// D3 imports commented out for development: UNCOMMENT for production
// import "whatwg-fetch";
// import * as d3 from "d3";

/* Main -------------------------------------------------------------------- */

// Test that webpack, Babel and D3 are working: REPLACE this with your code

// Test ES6 let behaviour
for (let i = 0; i < 5; i++) {
    window.setTimeout(function(){
        console.log("i:",i);
    }, 1000);
}

// Test generator function
function* generatorFunction() {
    yield "Generator working ... 1";
    yield "Generator working ... 2";
    yield "Generator worked";
}

for (const val of generatorFunction()) {
    document.getElementById("generator").innerHTML = val;
}

// Test async function
function delayResolve(msg, delay) {
    return new Promise(resolve => {
        window.setTimeout(() => {
            resolve(msg);
        }, delay);
    });
}
async function asyncFunction(msg, delay) {
    const output = await delayResolve(msg, delay);
    document.getElementById("async").innerHTML = output;
}

asyncFunction("Async worked", 2000);

// Test window.fetch
window.fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
    }).catch(function(error) {
        console.log(error);
    });

// Test d3
d3.select("body").style("background-color", "black");
d3.selectAll("p").style("color", "white");
