function check(number){
    const remainder = number % 2;
    if(remainder == 0){
        // return true;
        console.log("number is even");
    }
    else{
        // return false;
        console.log("number is odd");
    }
    // if(number % 2 == 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}

check(105);
check(220);

const giverNumber = 50;
const getResult = check(giverNumber);
// console.log(getResult);