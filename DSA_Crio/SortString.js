let s = ["1", "5", "11", "3", "7", "9", "51"];

s.sort((a,b) => parseInt(b) - parseInt(a));
console.log(s);