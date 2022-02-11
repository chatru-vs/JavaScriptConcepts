const arr = [5, 1, 3, 2, 6];
function double(x){
    return x * 2;
}

function fourtimes(y){
    return y * 4;
}

const output = arr.map(double);
console.log(output);
const output1 = arr.map(fourtimes);
console.log(output1);
const output2 = arr.map((x) => x.toSring(2));
console.log(output2);
