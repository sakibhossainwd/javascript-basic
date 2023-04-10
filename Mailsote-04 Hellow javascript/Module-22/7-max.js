function getArrayNumber(numbers){
    var maxNumber = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > maxNumber){
            maxNumber = element;
        }
    }
    return maxNumber;
}

var arrayNumber = [10, 20, 90, 40, 50, 60, 70];
var giveArrayNumber = getArrayNumber(arrayNumber);
console.log(giveArrayNumber);