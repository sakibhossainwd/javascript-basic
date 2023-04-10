var names = 'sakib';
names = 'rakib';
// console.log(names);

// 14
var numbers = [20, 58, 65, 35, 45];
numbers[3] = 50;
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    // console.log(i, number);
}

// 17
var numbers = [20, 58, 65, 35, 45];
// console.log(numbers[2]);

// 18
var numbers = [20, 58, 65, 35, 45];
numbers[3] = 20;
// console.log(numbers);

// 19
var numbers = [20, 58, 65, 35, 45];
number =  numbers.indexOf(65);
// console.log(number);

// 21
var numbers = [20, 58, 65, 35, 45];
numbers.push(20);
// console.log(numbers);

// 2nd
var numbers = [20, 58, 65, 35, 45];
numbers.pop(45);
// console.log(numbers);

// 22
var numbers = [20, 58, 65, 35, 45];
numbers.unshift(50);
// console.log(numbers);

// 2nd
var numbers = [20, 58, 65, 35, 45];
numbers.shift(45);
// console.log(numbers);


// 24
var taka = 2000;

// if(80000 < taka){
//     console.log('I will buy a MAC');
// }
// else if(60000 < taka){
//     console.log('I will buy a gaming laptop');
// }
// else if(40000 < taka){
//     console.log('I will buy a lenovo yoga computer');
// }
// else if (20000 < taka){
//     console.log('i will buy a secondhend laptop');
// }
// else{
//     console.log('mobile is enoup for me');
// }


// 25
for(var i = 0; i < 39; i++){
    // console.log('Alhamdulilah');
}


// 29
for( var i = 58; 98 > i; i++){
    // console.log(i);
}

// 30
for( var i = 412; i <= 456; i = i + 2){
    // console.log(i);
}


// 31
for(var i = 581; i <= 599; i = i +2){
    // console.log(i);
}


// 33
var leaning = ['variable', 'math', 'loop', 'while', 'for', 'break'];
for(var i = 0; i < leaning.length; i++){
    var option = leaning[i];
    // console.log(i, option);
}


// 34
var mobile = ['Hisence', 'Samsung', 'MI'];
var i = 0;
while(i < mobile.length){
    var model = mobile[i];
    i++;
    // console.log(i, model);
}

// 35
for( var i = 30; i < 50; i++){
    // console.log(i);
    if(44 <= i){
        break;
    }
}


// 36
var bookPrice = [100, 200, 150, 250];
for(var i = 0; i < bookPrice.length; i++){
    var price = bookPrice[i];
    if(200 <= price){
        continue;
    }
    // console.log(price);
}

// while loop with if-else
let a = 1;
while(a < 10){
    if(a % 2 == 0){
        console.log(a, ' is even number');
    }
    else{
        console.log(a, ' is odd number')
    }
    a += 1;
}

