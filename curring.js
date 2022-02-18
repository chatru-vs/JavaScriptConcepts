function mul(val1, val2) {
    document.write("<p>" + val1 * val2 + "</p>");
}

let var1 = mul.bind(this, 5);
document.write("var1 method");
var1(4);
var1(7);
let var2 = mul.bind(this, 4);
document.write("var2 method")
var2(2);
var2(4);  