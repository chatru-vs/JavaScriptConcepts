//eventloop=> continously monitor the call stack and callback queue
console.log("start")
document.getElementById("clickMe").addEventListener("click", function cb(){
    console.log("callback Que Event");
});

console.log("End");