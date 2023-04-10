// Using Function 
function hotelDays(days){
    if(days <= 10){
        var under10Days = days * 500;
        console.log(under10Days);
    }
    else if(days <= 20 && days > 10){
        var after10days = days - 10;
        var after10daysMoney = after10days * 300;
        console.log(after10daysMoney);
        var under10DaysMoney = 10 * 500;
        var under20Days = under10DaysMoney + after10daysMoney;
        console.log(under20Days);
    }
    else {
        var first10DaysCost = 10 * 500;
        var second11To20DaysCost = 10 * 300;
        var thirdinifinityDays = days - 20;
        var thirdinifinityDaysCost = thirdinifinityDays * 100;
        var totoalAbove20DaysCost = first10DaysCost + second11To20DaysCost + thirdinifinityDaysCost;
        console.log(totoalAbove20DaysCost);
    }
    
}

hotelDays(22);


// Using if-else

var days = 12;

if(days <= 10){
    var under10Days = days * 500;
    console.log(under10Days);
}
else if(days <= 20 && days > 10){
    var after10days = days - 10;
    var after10daysMoney = after10days * 300;
    console.log(after10daysMoney);
    var under10DaysMoney = 10 * 500;
    var under20Days = under10DaysMoney + after10daysMoney;
    console.log(under20Days);
}
else {
    var first10DaysCost = 10 * 500;
    var second11To20DaysCost = 10 * 300;
    var thirdinifinityDays = days - 20;
    var thirdinifinityDaysCost = thirdinifinityDays * 100;
    var totoalAbove20DaysCost = first10DaysCost + second11To20DaysCost + thirdinifinityDaysCost;
    console.log(totoalAbove20DaysCost);
}
