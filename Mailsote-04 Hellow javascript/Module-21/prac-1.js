/*Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.*/

function hourTime(hour){
    const minutes = hour * 60;
    return minutes;
}
const hourQuantity = 5;
const hourInMinutes = hourTime(hourQuantity);
console.log(hourInMinutes);