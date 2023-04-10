// Home work: 1
// write a function that will take 3 number will return tha max number.
// write a function that will take 3 paremeters and will return the min number

// first time do it using if-elese
// second time do it using Math.min or Math.max.


// 1
function number(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < largest){
            largest = element;
        }
        // const maxNumber = Math.max(element);
        // return maxNumber;
    }
    return largest;
}
const inputNumber = [10, 20, 30, 40];
const numberMax = number(inputNumber);
console.log(numberMax);