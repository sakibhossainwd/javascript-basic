// 1 part
var number01 = 13;
var number02 = 79;
var number03 = 45;

var numbers = [13, 79, 45];

if (number01 > number02){  
    if(number01 > number03){
        console.log(number01)
    }
    else{
        console.log(number03)
    }
}
else{
    if(number02 > number01){
        if(number02 > number03){
            console.log(number02)
        }
    }
}

// Another way
const num1 = 13;
const num2 = 79;
const num3 = 45;

if (num1 >= num2 && num1 >= num3) {
  console.log(num1 + " is the largest number");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2 + " is the largest number");
} else {
  console.log(num3 + " is the largest number");
}


// 2 part
var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('Isosceles');
}