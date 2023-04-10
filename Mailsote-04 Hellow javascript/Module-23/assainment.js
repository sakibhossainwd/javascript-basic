/*
#module_release #basic_javascript_milestone #module_24



আজকের মডিউল এ জাস্ট দুইটা ভিডিও। অর্থাৎ এসাইনমেন্ট এ কি করতে হবে সেই রিলেটেড কথাবার্তা। এই এসাইনমেন্ট দিয়ে শেষ হবে তোমার বেসিক জাভাস্ক্রিপ্ট মাইলস্টোন। বেসিক কনসেপ্টগুলো শেষ করার পর যে কয়েকটা প্রবলেম সলভিং করছো সেই প্রবলেমগুলা ভালোমতো বুঝলেই এই এসাইনমেন্ট করতে তোমার কোন সমস্যা হওয়ার কথা না। ফাংশনের নাম হুবহু আমি যেমন বলে দিয়েছি সেটার মতো করে হতে হবে। অন্য কোন নাম/ অথবা নামের কোন অক্ষর ছোট , কোন অক্ষর বড় করলে হবে না , হুবহু আমার মত দিতে হবে। 



Problem 1: Let’s play a mind game


তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")



এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

Sample Input & Output

Input: 5 Output: 7.5
Input: 50 Output: 75
Input: 33 Output: 49.5

*/
// problem-01
  function mindGame(number){
    let result = (number * 3 + 10) / 2 - 5;
    return result;
    // console.log(result);
  }
  const giveNumber = mindGame(33);
//   console.log(giveNumber);


/*
Problem 2: Finding even or odd


তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:



Input: ‘Phero’ Output: odd
Input: ‘Batch7’ Output: even
Input: ‘chatgpt’ Output: odd

*/
// problem-02
function evenOdd(name){
    let nameWord = [];
    for(let i = 0; i < name.length; i++){
        let element = name[i];
        nameWord.push(element);
        // console.log(element);

    }
    // console.log(nameWord);
    if(nameWord.length % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
const giveName = evenOdd('sakib hossains');
// console.log(giveName);

/*
Problem 3: Is Less or Greater than seven

তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input : 6 Output: -1
Input: -15 Output: -22 
Input: 15 Output: 30
*/
// problem - 03
function isLGSeven(number){
    if(number < 7){
        let result1 = number - 7;
        return result1;
    }
    else{
        let result2 = number + number;
        return result2;
    }
}
const giveNumber1 = isLGSeven(15);
// console.log(giveNumber1);

/*
Problem 4: Finding Bad data

তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

Sample Input & Output:-
Input: [ 1,2,5 ] Output: 0
Input: [ 2, -5, -7, -13 ] Output: 3
Input: [ -4, -9, -5, -33, -55 ] Output: 5
*/
function findingBadData(numbers){
    let negativeNumber = [];
    // let positiveNumber = [];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        // console.log(element);
        if(element < 0){
            negativeNumber.push(element);
            
        }
        else{
            // positiveNumber.push(element);
        }
    }
    let badData = negativeNumber.length;
    return badData;

    
}
const numberArray = [-4, -9, -5, -33, -55];
const giveNumbers = findingBadData(numberArray)
// console.log(giveNumbers);


/*
Problem 5: Convert your gems into diamond

তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

Sample Input & Output:-
Input: 1, 1, 1 Output: 96
Input: 20, 200, 50 Output: 6970
Input: 100, 5, 1 Output: 303
*/
function gemsToDiamond(friend1, friend2, friend3){
    let friend1Diamond = friend1 * 21;
    let friend2Diamond= friend2 * 32;
    let friend3Diamond = friend3 * 43;
    let totalFriendsDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
    if(totalFriendsDiamond > 1000*2){
        extraDiamond = totalFriendsDiamond - 2000;
        return extraDiamond;
    }
}
const giverGems = gemsToDiamond(100, 5, 1);
console.log(giverGems);


/*
কিছু কমন প্রশ্ন: 

প্রশ্ন-১: ফ্যাংশন এর ভিতরে কি console.log লিখবো নাকি রিটার্ন করবো?

উত্তর: তুমি চাইলে তোমার নিজের জন্য বা বুঝার জন্য console.log লিখতে পারো। সেটা অপশনাল। তবে ফাংশনের রেজাল্ট অবশ্যই রিটার্ন করতে হবে। সেটা console.log করলে কাজ হবে না। 

.

প্রশ্ন-২: সবসময় কি সংখ্যা বা স্ট্রিং রিটার্ন করবো।

  

উত্তর: সব প্যারামিটার ঠিক থাকলে সঠিক সংখ্যা বা সঠিক ভ্যালু রিটার্ন করবে। যদি এক বা একাধিক ইনপুট খারাপ থাকে তাহলে কোন error স্ট্রিং হিসেবে রিটার্ন করে দিবে। 



যদি সংখ্যা রিটার্ন করার কথা সেখানে সংখ্যা রিটার্ন করবে। যদি বুলিয়ান ভ রিটার্ন করার কথা সেখানে true/false রিটার্ন করবে।



অর্থাৎ টোটাল খরচ কত হবে সেখানে জাস্ট সংখ্যা রিটার্ন করবে। সেখানে জোর করে সংখ্যাকে স্ট্রিং এ কনভার্ট করে। বা your total cost is 200 taka এমন করা যাবে না। জাস্ট 200 রিটার্ন করে দিবে। 



.

প্রশ্ন-৩: ফাংশনের বাইরে কি console.log করতে হবে?



উত্তর: ফাংশনের বাইরে console.log লেখা বা না লেখা অপশনাল। তুমি চাইলে তোমার কোড চেক করার জন্য। বা যে রেজাল্ট দেয়ার কথা সেটা ঠিক মতো দিচ্ছে কিনা সেটা ভেরিফাই করার জন্য ওই ফাংশনকে কল করে তার রিটার্ন যে ভ্যালু আছে সেটা console.log করে চেক করতে পারো। তবে আমাদের এসাইনমেন্ট এর জন্য এইটা করা জরুরি না। আমরা শুধু মেইন ফাংশনটা নিয়ে সেটাকে চালিয়ে দেখবো ঠিকমতো কাজ করছে কিনা। 



.

প্রশ্ন-৪: var ব্যবহার করা যাবে?

উত্তর: না। let/const ব্যবহার কর। 

.



প্রশ্ন-৫: ইউজারের কাছ থেকে কোন ইনপুট নিতে হবে? [ IMPORTANT ]



উত্তর: এসাইনমেন্ট এর জন্য ইউজারের কাছ থেকে কোন ইনপুট নেয়া লাগবে না। জাস্ট ফাংশন লিখলেই হবে। আমরা তোমার কোড নিয়ে সেটার ফাংশনকে কল করবো। 



তুমি চেক করার সময় ইনপুট প্যারামিটার দিয়ে চেক করতে পারো। তারপর চেক করা শেষ হলে সেই কোড অবশ্যই কমেন্ট করে ফেলতে হবে অথবা মুছেই ফেলতে পার।আমরা শুধু ফাংশনের ভিতরে ঠিক আছে কিনা দেখব । তাই সাবমিট কড়ার সময় তোমাদের console.log গুলো অবশ্যই মুছে ফেলবা।

  

 ফাংশনকে আমরা বিভিন্ন সংখ্যা -- ভালো এবং খারাপ সংখ্যায় দিয়ে কল করবো। তখন যদি ঠিক রেজাল্ট দেয় তাহলেই হবে। তোমাদের সWRONG FORMAT

-problem 1



function makeDouble(number){

 // do not write anything like this, just return the result

 return "Problem one result: " + number* 2;

}

const result = makeDouble(5);

// remove any console.log() or function call like this form here👆



CORRECT FORMAT



function makeDouble(number) {

 return number * 2;

}



হা হা কি মজা !!!



এসাইনমেন্ট ডেডলাইন + মার্কস:
9 March রাত ১১.৫৯ (বাংলাদেশ সময়) এর মধ্যে তোমার এসাইনমেন্ট জমা দিলে তোমার সর্বোচ্চ মার্কস ৬০ মার্কস (৫০ এসাইনমেন্ট এর মার্কস + ১০ মার্কস বোনাস) । এরপরের দিন অর্থাৎ 10 March, রাত ১১.৫৯ (বাংলাদেশ সময়) এর মধ্যে তোমার এসাইনমেন্ট জমা দিলে তোমার সর্বোচ্চ মার্কস ৫০ মার্কস (৪০ এসাইনমেন্ট এর মার্কস + ১০ মার্কস বোনাস)। তুমি যদি এর চাইতেও দেরি করো অর্থাৎ 10 March রাত ১১.৫৯ এর পরে সাবমিট করো, তাহলে তোমার সর্বোচ্চ মার্কস ৩০ মার্কস।



হা হা কি মজা !!!



যেমন তেমন আসুক না এসাইনমেন্ট 

মডিউল ঠিকমতো প্রাকটিস করলে-- 

এসাইনমেন্ট, হয়ে যাবে তোমার এসিস্ট্যান্ট

*/