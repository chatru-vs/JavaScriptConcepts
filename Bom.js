window.alert("hello Chatrughan Prasad");

function msg() {
    var v = confirm("Are u sure?");
    if (v == true) {
        alert("you are great to go");
    }
    else {
        alert("cancel");
    }

}
msg();

function intro() {
    var v = prompt("Who are you?");
    alert("I am " + v);

}

intro();

function callbackmsg() {
    setTimeout(
        function () {
            alert("Welcome to Javatpoint after 2 seconds")
        }, 2000);

}

callbackmsg();

