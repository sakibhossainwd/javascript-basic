function getArrayNumber(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum)
    }
    return sum;
}

function getOddNumberAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            oddNumbers.push(element);
            console.log(index, element)
        }
        
    }
    return oddNumbers;
}


const myNumbers = [5, 7, 8, 10, 45, 30];
const oddNumbers = getOddNumberAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getArrayNumber(oddNumbers);
console.log(oddNumberSum);