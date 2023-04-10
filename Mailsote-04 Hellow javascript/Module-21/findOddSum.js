// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         sum = sum + element;
//         // console.log(i, element, sum);
//     }
//     return sum
// }

function getOddNumberAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element % 2 !== 0){
            // console.log(i, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        // console.log(i, element, sum);
    }
    return sum
}

const myNumbers = [12, 65, 45, 78, 32, 47, 91]
// getOddNumberAnArray(myNumbers);
const getOddNumbers = getOddNumberAnArray(myNumbers);
console.log(getOddNumbers);
getSumOfAnArray(getOddNumbers);
const oddNumberSum = getSumOfAnArray(getOddNumbers);
console.log(oddNumberSum);