console.log(`This is tutorial 46`);
let reg = /sukanya/; // this is a regular expression in js
// // g is a global flag for an exact match  and check each times a matches found if matches found return index otherwise return null
// console.log(reg);
reg = /sukanya/g;
 //reg = /sukanya/i; // this is a flag of regular expression it 
 // also checks the case insensitivity  it gives multiple occurences
// console.log(reg);
// console.log(reg.source); //regular expression ke andr pada content de deta hai

//Functions to match expressions
let s = "This is sukanya and is Sukanya sukanya looser";

//1. exec() -this function return an array for match and null for no match

let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); --> we can use multiple exec with global flag

// console.log(result.input);
// console.log(result.index);

// 2. test() -> returns true or false
let result2 = reg.test(s);
// console.log(result2); // this will only print true if the "reg" is there in the string



//3. match() // It will return array of result or null
//  let result3 = reg.match(s)//---> this is wrong
 let result3 = s.match(reg);//---> This is right
// console.log(result3);

// 4. search() - returns index of first match else -1
//let result4=  reg.search(s); // this is wrong
let result4 = s.search(reg); //--> this is right
// console.log(result4);

// s.replace()- Returns  new replaced string with all the replacement
let result5 = s.replace(reg,'SUMEET');
console.log(result5);
//want to replace all then use global flag if you are not using global flag then it simply replace only first one