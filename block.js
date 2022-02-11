var a = 100;
let b = 200;
{
    //shaddowed because they point to the same location print a =10
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);