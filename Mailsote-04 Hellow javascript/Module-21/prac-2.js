function findLeapYear(year){
    const leapYear = year % 4;
    if(leapYear === 0){
        // console.log('Leap year is:', year);
        return true;
    }
    else{
        // console.log('This is not Leap year: ', year);
        return false; 
    }
    
}
// findLeapYear(2023);
const myYear = [2024, 2024, 2025, 2028, 2030];
const isMyYearLeapYear = findLeapYear(myYear);
// console.log('My year: ', isMyYearLeapYear);
// findLeapYear([2023, 2024, 2025, 2028, 2030]);


// another funtion
// program to check leap year
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input

// checkLeapYear(2023);


// my turn

function leapYears(takeYear){
    const myLeapYear = [];
    for(let i = 0; i < takeYear.length; i++){
        const element = takeYear[i];
        // console.log(element);
        if(element % 4 == 0){
            console.log(element);
            myLeapYear.push(element);
        }
    }
    return myLeapYear;
}

const giveYear = [2023, 2024, 2025, 2028, 2030];
const thisLeapYear = leapYears(giveYear);
console.log(thisLeapYear);