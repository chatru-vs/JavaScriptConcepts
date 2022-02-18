//Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting.
//A closure can be defined as a JavaScript feature in which the inner function has access to the outer function variable. In JavaScript, every time a closure is created with the creation of a function.
function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    a =100;
   return y();
}
var z = x();
console.log(z);
//z(); 

function mul(val1){  
    return function(val2){  
        document.write("<p>" + val1 * val2 + "</p>");  
    }  
}  
  
let a = mul(2);  
a(5);  
a(6);
console.log(mul(5));  
console.log(mul(6));  