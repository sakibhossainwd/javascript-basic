var Jim = 84;
var Dele = 75;

if(Jim > Dele){
    // console.log('Jim is max');
}
else{
    // console.log('Dele is max');
}
// another way using only max
const maxGirl = Math.max(Jim, Dele);
// console.log(maxGirl);

// three person max number

var jim = 84;
var dele = 99;
var chinko = 77;

if(jim > dele && jim > chinko){
    // console.log('jim is the max');
}
else if(dele > jim && dele > chinko){
    // console.log('dele is the max');
}
else{
    // console.log('chinko is the max');
}
// another way using max
const thereeGirlMax = Math.max(jim, dele, chinko);
// console.log(thereeGirlMax);



// ! Homework : 1
//01-- write a function thar will take 3 numbers will return the max number
//02-- write a function thar will take 3 parameters and will return the min number
// requerment
// first time do it using If-else
// second time do it using  Math.min or Math.max


function findMax(num1, num2, num3){
    // if(num1 > num2 && num1 > num3){
    //     return num1;
    // }
    // else if(num2 > num1 && num2 > num3){
    //     return num2;
    // }
    // else{
    //     return num3;
    // }

    // using Math.max

    var findeMaxWithMath = Math.max(num1, num2, num3);
    return findeMaxWithMath;
}
var giveNumber = findMax(10, 20, 30);
console.log(giveNumber);