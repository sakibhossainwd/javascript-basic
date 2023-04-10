// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
// 01
// function namte(namta){
//     console.log('multiplication table');
// }
// namte('13')
function multiplicationTable() {
    let num = 13;
    for(let i = 1; i <= 10; i++) {
    //   console.log(num + ' x ' + i + ' = ' + num*i);
    }
  }
  
  multiplicationTable();

//   ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
//   2
function change(word){
    var toLowerCase = word.toLowerCase(word);
    console.log(toLowerCase);
}
change('SAKIB');

// 02
function toLowerCase(name, toUpperCase) {
    if (toUpperCase) {
      return name.toUpperCase();
    } else {
      return name.toLowerCase();
    }
  }
  
//   console.log(toLowerCase("John Doe", false)); // Output: "john doe"
//   console.log(toLowerCase("John Doe", true)); // Output: "JOHN DOE"
// another 02
function convertToLowerCase(name) {
    let lowercaseName = name.toLowerCase();
    return lowercaseName;
  }
  
  let uppercaseName = "JAMES";
  let lowercaseName = convertToLowerCase(uppercaseName);
//   console.log(lowercaseName); // Output: james
  
  let regularCaseName = "John";
  lowercaseName = convertToLowerCase(regularCaseName);
//   console.log(lowercaseName); // Output: john

//   ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
// 3
function fullName(name01, name02){
    var attatchName = name01 + " " + name02;
    // console.log(attatchName);
}
var name1 = 'sakib';
var name2 = 'hossain';

fullName(name1, name2);


// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  
// 4
function square(number){
    var makeSquare = number * number;
    // console.log(makeSquare);
}
square(5);


// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :



// const pizza = {

//  toppings: ['cheese', 'sauce', 'pepperoni'],

//  crust: 'deep dish',

//  serves: 2

// }

// এবং pepperoni প্রিন্ট করবা।
// 05
const pizza = {
    toppings:['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}

// var propertices = Object.keys(pizza);
// console.log(propertices);

var property = pizza.toppings;
// console.log(property);

var findProperty = property[2];
// console.log(findProperty);

// 5 anoher
const pizza01 = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
  };
  

//   console.log(pizza01.toppings[2]);

