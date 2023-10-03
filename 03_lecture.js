let score = "33s"

console.log(typeof score);
console.log(typeof(score));

let scoreToNum = Number(score);
console.log(typeof scoreToNum);
console.log(scoreToNum);
//If we mix number with string as like "33assa" then it will  give NaN(not a number)


//boolan conversion
console.log("--------------------boolean conversion---------------");
let isPassed = "1";
console.log(isPassed);
console.log(typeof isPassed);

//getting false while using 'null' and '0'.
//other wise for every value it will give true.
let convertIsPassed = Boolean(isPassed);
console.log(convertIsPassed);
console.log(typeof convertIsPassed);