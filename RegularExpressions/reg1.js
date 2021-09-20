console.log("This is tutorial 47");
let regex = /sukanyasss/;
let str = "sukanya ans sukanya loves pizza";
let result = regex.exec(str);
console.log("The result from exec is",result);
if(regex.test(str)){
    console.log(`the string is ${str} matches the expression ${regex.source}` );
}
console.log(`the string is ${str} does not matches the expression ${regex.source}` );

