const arr = [5, 1, 3, 2, 6];
//filter odd values
function isOdd(x) {
    return x % 2;
}

function isEven(y) {
    return y % 2 === 0;
}

function greaterfour(z) {
    return z > 4;
}

const output3 = arr.filter((zd) => zd <= 3);

const output = arr.filter(isOdd);
console.log(output);
const output1 = arr.filter(isEven);
console.log(output1);

const output2 = arr.filter(greaterfour);
console.log(output2);
console.log(output3);

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findSum(arr));
console.log(findMax(arr));
const output4 = arr.reduce(function (accumulator, currunet) {
    accumulator = accumulator + currunet;
    return accumulator;

}, 0);
console.log(output4);

const output5 = arr.reduce(function (max1, curr) {
    if (curr > max1) {
        max1 = curr;
    }
    return max1;
}, 0)
console.log(output5);
const users = [
    {firstname: "chatrughan", lastname: "prasad", age: 37},
    {firstname: "rajni", lastname: "kant", age: 33},
    {firstname: "Kritika", lastname: "Saini", age: 27},
    {firstname: "Reeta", lastname: "tomar", age: 32},
    {firstname: "naveen", lastname: "Saini", age: 27},
];

const output6 = users.map((mx) => mx.firstname + " " + mx.lastname);
console.log(output6);

const output7 = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(output7);
const output8 = users.filter((xmn) => xmn.age < 30).map((xmn) => xmn.firstname);
console.log(output8);

const output9 = users.reduce((acc1, curr1) => {
    if (curr1.age < 30) {
      acc1.push(curr1.firstname);
    }
    return acc1;
  }, []);
  console.log(output9);