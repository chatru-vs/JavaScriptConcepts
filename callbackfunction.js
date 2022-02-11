// //call back function
setTimeout(function () {
    console.log("timer");
}, 3000);
function x(y) {
    console.log("x");
    y();

}
x(function y() {
    console.log("y");

});
function attachEventListner(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function mnd(){
        console.log("button clicket", ++count);
    });  
}

attachEventListner();
