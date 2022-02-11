function a() {
    var b = 10;
    c();
    function c() {
    console.log(b);


    }
}

a();

// a closure to var b =10
//local scope => parent scope   parent scope => global scope  global scope=> Null and exit the function.