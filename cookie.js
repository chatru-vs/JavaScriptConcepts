function setCookie() {
    //Declaring 3 key-value pairs  
    var info = "Name=" + document.getElementById("name").value + ";Email=" + document.getElementById("email").value + ";Course=" + document.getElementById("course").value;
    //Providing all 3 key-value pairs to a single cookie  
    document.cookie = info;
}

function getCookie() {
    if (document.cookie.length != 0) {
        //Invoking key-value pair stored in a cookie  
        alert(document.cookie);
    }
    else {
        alert("Cookie not available")
    }
}  


function setCookie1()  
{  
    var obj = {};//Creating custom object  
    obj.name = document.getElementById("namejson").value;  
    obj.email = document.getElementById("emailjson").value;  
    obj.course = document.getElementById("coursejson").value;  
  
//Converting JavaScript object to JSON string      
var jsonString = JSON.stringify(obj);  
  
    document.cookie = jsonString;  
}  
         function getCookie1()  
{  
    if( document.cookie.length!=0)  
    {  
//Parsing JSON string to JSON object  
    var obj = JSON.parse(document.cookie);  
      
        alert("Namejson="+obj.namejson+" "+"Emailjson="+obj.emailjson+" "+"Coursejson="+obj.coursejson);  
    }  
    else  
    {  
        alert("Cookie not available");  
    }  
}  