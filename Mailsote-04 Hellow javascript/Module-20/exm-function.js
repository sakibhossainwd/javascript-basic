function subject(assingment01, assingment02, assingment03){
    const total = assingment01 + assingment02 + assingment03;
    const average = total / 3;
    return average;

}
const assingment01Marks = 60;
const assingment02Marks = 50; 
const assingment03Marks = 55;

var myAverage = subject(assingment01Marks, assingment02Marks, assingment03Marks);

console.log('My average so far', myAverage);


// another
function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13);
const result2 = add(35, 7);
const finalResult = add(result1, result2);
console.log(finalResult);