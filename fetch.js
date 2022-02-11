//fetch 
// Microtask Queue higher priority
// all callback function comes through the promises goes to Microtask Que
// promises and mutation observer => microtask que
console.log("Start");
setTimeout(function cbT(){
    console.log("cb SetTimeout");
}, 5000);
fetch("https://api.netflix.com").then(function cbF(){
    console.log("CN Netflix");       
    });
console.log("End");

//Starvation of function in callback que once microtask que taks itself create microtask.
//In most of the browsers, there is an event loop for each browser tab this makes every process isolated and avoid a webpage with infinite loops and heavy processing to freeze the entire browser

// How fetch() function works
// MicroTask Queue in JS
// What are MicroTasks in JS?