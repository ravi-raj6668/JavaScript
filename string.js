let name = "Google";

let charCount = 6;

console.log(`The name is ${name.toUpperCase()} and the char count is ${charCount}`);


let value1 = new String("TestObject");//object
let value2 = value1;//object


console.log(typeof value1);
console.log(typeof value2);


value2 = "testBYValue";

value1 = value2;
console.log("output1 : " + value1);
console.log("output2 : " + value2);

// In your code, you are working with JavaScript's primitive data types and objects. Let's break down what happens step by step:

// const value1 = new String("TestObject");: You create a new String object named value1 with the value "TestObject". This is an object type.

// let value2 = value1;: You assign the reference to the value1 object to value2. Now, both value1 and value2 point to the same object in memory.

// console.log(typeof value1);: This will print "object" because value1 is an object (a String object).

// console.log(typeof value2);: This will also print "object" because value2 is a reference to the same String object as value1.

// value2 = "testBYValue";: You reassign value2 to a new string primitive with the value "testBYValue". 
// This creates a new string in memory, and value2 now references this new string.

// console.log("output1 : " + value1);: This will print "output1 : TestObject" 
// because value1 still references the original String object with the value "TestObject".

// console.log("output2 : " + value2);: This will print "output2 : testBYValue" 
// because value2 now references the new string primitive with the value "testBYValue".

// So, the key point to understand here is that when you assign objects to variables, you are working with references to the object in memory.
//  When you assign primitive values (like strings) to variables, you are working with the actual values themselves.


console.log(value1[0]);
console.log(value1.__proto__);

const s1 = "mubarak";//ub
console.log(s1.slice(-6, 3));

let yu="ghdgf--ghg- -ty iuy-kiya--ki --ret-- tyu--"
console. log(yu.split('--'));