// factorial is number! to 1 mulfication
// 3! = 3*2*1
// 4! = 4*3*2*1

function factorial(number){
    let result = 1;
    for( let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}
const result = factorial(9);
// console.log(result);

// 21-8 while loop for factorial

function factorialNum(num){
    let num = 1;
    let result = 1;
    while(num <= 7){
        result = result * num;
        num++;
    }
    return result;
}

const factorialMultification = factorialNum(5);
console.log(factorialMultification);