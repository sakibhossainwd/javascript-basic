const result = Math.pow(5, 5);
// console.log(result);

const num1 = 30;
const num2 = 55;

const defrent = Math.abs(num1 - num2);
// console.log(defrent);

// if (defrent < 5){
//     console.log('you can marry him')
// }
// else{
//     console.log('go to Madrasha');
// }

// ---- Round part ----!
// Note if number is .5 it it will go upper step number // if number is 0.5 lower it will go donw number
const number = 2.5;
const fullNumber = Math.round(number);
// console.log(fullNumber);

// ---- Ceil and floor -----//
const number1 = 2.434;
const ceilNumer = Math.ceil(number1);
// console.log(ceilNumer);

// and
const floorNumber = Math.floor(number1);
// console.log(floorNumber);



// ----- Random number genaretor
// console.log(Math.random())
const random = Math.random()*100;
// console.log(random);
// make round number using random number
const random1 = Math.round(Math.random()*100);
// console.log(random1);
// for loop
for(let i = 0; i < 20; i++){
    const random2 = Math.round(Math.random()*6);
    console.log(random2);
}
