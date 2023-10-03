//objects literals

const mySym = Symbol("key1")
console.log(typeof mySym);

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])
// console.log(JsUser);



const mySym1 = Symbol("key1")
const JsUser1 = { 
    name : "mubarak",
    age : 18,
    "full_name" : "Baitha",
    [mySym] :" ToCheck",
    location: "Bihar",
    email:"mubarak161099@gmail.com",
    isLoggedIn:false,
    lastLoginDays :["monday","friday"]
    

}
// console.log(JsUser1.name);
// console.log(JsUser1["full_name"]);
console.log(JsUser1[mySym1] +" "+typeof [mySym1]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());