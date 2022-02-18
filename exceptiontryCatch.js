try {
    var a = ["34", "32", "5", "31", "24", "44", "67"]; //a is an array  
    document.write(a);    // displays elements of a  
    document.write(b); //b is undefined but still trying to fetch its value. Thus catch block will be invoked  
} catch (e) {
    alert("There is error which shows " + e.message); //Handling error  
}

try {
    var a = 2;
    if (a == 2)
        document.write("ok");
}
catch (Error) {
    document.write("Error found" + e.message);
}
finally {
    document.write("Value of a is 2 ");
}  