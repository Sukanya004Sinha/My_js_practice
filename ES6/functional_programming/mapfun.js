// map is a hof and pure fun .
let arr =[1,2,3,4,5,6,7];
function square(num){
    return num*num;

}
function cuber(num){
    return num*num*num;
}
function filterOdd(num){
    return num%2==1;
}
    allElementsArr = arr.map(square);
    console.log("square arr",allElementsArr)
    allElementsArr= arr.map(cuber);
    console.log("cubed Arr",allElementsArr)
    console.log("```````````````````````````````````");
    console.log(arr);
    allElementsArr=arr.filter(filterOdd);
    console.log("odd Arr", allElementsArr);
    //these can't be changes in any array
 // poore array me  kisi function me pass kr denge to btayega ek element me kitne degree of chnge lekar aana hai.
 // map calls its callback fn on every element of the array and make a new array that has valued returned by the cb fn.