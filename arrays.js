// array concept in javascript


const myArray = [0,1,2,3,4,5];


console.log(myArray);

myArray.push(8);
console.log(myArray);

myArray.push(22);
console.log(myArray);

myArray.pop();
myArray.pop();
console.log(myArray);


//array slice and splice concept
console.log("-----array slice and splice-------");
const array = [1,2,3,4,5,6,7,8];

console.log("A ", array);

const op1 = array.slice(1, 3)

console.log(op1);
console.log("B ", array);


const op2 = array.splice(1, 3)
console.log("C ", array);
console.log(op2);
