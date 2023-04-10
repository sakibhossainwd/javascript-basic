// 1) write a function called foo() which prints "foo" and a function called bar() which prints "bar", Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.



//02) write a function  called make_avg() which will take an three integers and return the average of those values.
// 02 -- code
function make_avg(num1, num2, num3){
    var numberAddetion = num1 + num2 + num3;
    var allNumber = 3;
    var findAvg = numberAddetion / allNumber;
    console.log(findAvg);

}
make_avg(10, 20, 30);

// 03) Challenging: Write a function called make-avg which will teke an array of integers and the size of that array and return the average of those values.
// 03 code
function makeAvg(arr, size) {
    let sum = 0;
    for(let i = 0; i < size; i++) {
      sum += arr[i];
    }
    let avg = sum / size;
    return avg;
  }
  
  let numbers = [10, 20, 30, 40, 50];
  let size = 5;
  let avg = makeAvg(numbers, size);
  console.log(avg); // Output: 30

//   04
// write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways: Has return + parameter / No return + Has paremeter


// Your are in a hurry to go to your school in time. But when you are cressing the road. the traffic signal is red coloured. IN this situation, if you try to cross the road, you may be in danger. If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. It value can be green, yellow or red & we will get different activities as output depending on the vaeiable. So, hurry up.