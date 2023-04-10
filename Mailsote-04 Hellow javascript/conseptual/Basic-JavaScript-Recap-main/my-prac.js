/*
২. এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড় */
// 02 code

var number = 55;

if(number % 2 == 0){
    console.log('my number is even');
}
else{
    console.log('my number is odd')
}

/* ৩. একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো */
// 03 code

var number = [10, 50, 30, 20, 60, 80, 40, 90, 70];

for(var i = 0; i < number; i++){
    Element = number[i];
}

/* ৪.এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ? */
// 04 code

var year = 2024;

if(year % 4 == 0){
    console.log(year, 'this year is Lepyear');
}
else{
    console.log(year, 'this is not leepyear');
}

/* ৫. ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো */
// 05 code

let numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

var box = [];
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    // console.log(element);
    if(element % 3 == 0 || element % 5 == 0){
        box.push(element);
    }
}
console.log(box);