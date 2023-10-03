//in javascript, there is no such `arrayindex out of bound exception`, here we get `undefined`

const array = [1,2,3,4,5]

const helllo = array.filter( (num) => num > 4);
console.log(helllo);
// for (let index = 0; index <= array.length; index++) {
//     const element = array[index];
//     console.log(element); 
// }