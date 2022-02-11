function x() {
    for (var i = 1; i <= 5; i++) {

        function closurebasic(x) {
            setTimeout(function () { // forms a closure it remember the refrence of the memory i value it has been to 6
                console.log(x);
            }, x * 3000);
        }
        closurebasic(i);
    }
    console.log("Namaste JavaScript");
}
x();