console.log("***********Stack operation**************");
let nameOne = "mubarak";

let nameTwo = nameOne;


nameTwo = "sahil";
console.log(nameTwo);

console.log(nameOne);












console.log("***********Heap Operation**************");
let objOne = {
    name: "mubarak"
}

let objTwo = {
    name1: ""
}
objTwo.name1 = objOne.name;

console.log(objTwo.name1);
objTwo.name1 = "sahil";

console.log(objTwo.name1);
console.log(objOne.name);










console.log("************object - Heap concept ***************");

const objOne1 = {
    name: "mubarak"
}

let objTwo2 = objOne1;
console.log(typeof objTwo2);


objTwo2.name = "sahil";
console.log("output1 : " + objTwo2.name);
console.log("output2 : " + objOne1.name);

// In this code, you have two objects, objOne1 and objTwo2, and you assign the reference of objOne1 to objTwo2. 
// Let's go through the code step by step:

// // const objOne1 = { name: "mubarak" };: You create an object objOne1 with a property name set to "mubarak".

// // let objTwo2 = objOne1;: You assign the reference to objOne1 to objTwo2. Both objOne1 and objTwo2 now point to the same object in memory.

// // console.log(typeof objTwo2);: This will print "object" because objTwo2 is an object.

// // objTwo2.name = "sahil";: You modify the name property of the object that objTwo2 references to "sahil". 
// Since both objOne1 and objTwo2 reference the same object, the change is reflected in both variables.

// // console.log("output1 : " + objTwo2.name);: This will print "output1 : sahil" 
// because objTwo2 points to the modified object with the name property set to "sahil".

// // console.log("output2 : " + objOne1.name);: This will also print "output2 : sahil" 
// because objOne1 also references the same object, so it reflects the same change made to the name property.

// // In this case, both objOne1 and objTwo2 reference the same object, 
// so any changes made to the object are reflected in both variables. 
// This is because objects in JavaScript are assigned by reference, not by value.

let userOne = {
    id: 1,
    name:"mubarak",
    email:'mubarak161099'

}
let x = userOne.id = 2
console.log(x);
console.log(userOne);
console.log(userOne.id);
