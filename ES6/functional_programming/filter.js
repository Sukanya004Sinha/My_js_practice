// map is a hof and pure fun
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
    allElementsArr = arr.filter(filterOdd);
   console.log("odd Arr",allElementsArr);
    console.log(arr);
    //these can't be changes in any array
// loop on the whole array and calls it's test cb on every element and filter out the element o ts callback


 // we can't use loop in jfx

    //filter ke liye callback pass krte then it gives true or false
    // filter out krne
