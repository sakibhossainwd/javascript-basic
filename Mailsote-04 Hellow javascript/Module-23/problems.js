/*
Problem:1   radianToDegree
ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
Sample Data:
Input:
10
25
199 
Output:
572.96
1432.39
11401.86
*/


function radianToDegree(radian){
    let pi = Math.PI;
    let degree = (radian * (180/pi)).toFixed(2);
    return degree;
}
const giveRadian = radianToDegree(10);
// console.log(giveRadian);


/*
Problem:2   isJavaScriptFile

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।
Sample Data
Input:
'app.js'
'js.png'
'image.js.png'
'image.jpg.js'
Output:
true
false
false
true
*/
function isJavaScriptFile(file){
    if(file.endsWith('.js')){
        return true;
    }
    else{
        return false;
    }
}
const giveExtensionName = isJavaScriptFile('index.js');
// console.log(giveExtensionName);

/*
Problem 3:  oilPrice
ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।
প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
প্রতি লিটার অকটেনের এর দাম – 135 টাকা

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।
Sample Data
Input:--
1, 1, 1
30, 20, 10
1,0,2
0,2,3
Output:--
379
7370
384
665
*/

function oilPrice(dejel, petrol, octen){
    let dejelPrice = dejel * 114;
    let petrolPrice = petrol * 130;
    let octenPrice = octen * 135;
    let totalOliPrice = dejelPrice + petrolPrice + octenPrice;
    return totalOliPrice;
}
const giverOilLitter = oilPrice(30, 20, 10);
// console.log(giverOilLitter);

/*
Problem 4:  publicBusFare


একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।

উদাহরণ১ঃ
যদি ১১৭ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

উদাহরণ২ঃ
যদি ২৩৫ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
Sample Data
Input
Output
50
55
112
235
365
0
1250
250
500
1000
*/
function publicBusFare(people){
    let busCapacity = 50;
    let microCapacity = 11;

    let remaining = 0;

    remaining = people % busCapacity;
    remaining = remaining % microCapacity;
    
    let costPublicBus = remaining * 250;
    return costPublicBus;
    
    
}
const givePeople = publicBusFare(365);
console.log(givePeople);