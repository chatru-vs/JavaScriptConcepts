

// function statement aka function declaration
function a(){
    console.log("a called");
}

//  function expression
var b = function xyz(){
    console.log("b called"); 
}
a(); 
b();

//Anonymous function
// function(){
// }
//named function expression
var c = function xyz(){
    console.log("b called"); 
}

//  difference between parameters and arguments
//provide parameter to function 
var d = function(param, param2){
    console.log("d called");
}
//argument pass to function
d(1, 2);

//first class function aks first class citizen
var e = function(param3){
    return function mnx(){

    }
}
console.log(e());