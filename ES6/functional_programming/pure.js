//what is Functional Programming??
//pure function - it cannot change the value of outer variable -> if it need a variable then it will take it as an argument and change the copy of it
// they always give same as output 
// for a given input it should always give the same output.
// higher order function are the function that takes a  an input and 
//return as an output
//--> map and filter are hof
// paradigm -> thought process.
// functions are first class citizens -> functions are treatd as a variable.
// hof uses pure functions and as well as functional programming.
// pure functions only access local variable .it takes global but can't perform changes in it.
// function also  treates as variable functions are first class citizen.
//there is only one diff b/w var and fn we can call a fn.
let a = 10;
function pureFn(arr){
   let tempArr =[];
   for(let i=0;i<array.length;i++){
     tempArr[i]=arr[i];
   }
   // a++;
   // return a;
}
console.log(pureFn(a));
console.log(a);