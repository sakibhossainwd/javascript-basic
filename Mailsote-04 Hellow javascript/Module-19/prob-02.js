// var me = 85;
// var tom = 66;
// var jane = 95; 
// var peter = 56;
// var john = 40;
// // if and if-else part

// // jane part
// if (me >= 80){
//     console.log('me got A grade')
// }
// else if (me >= 60){
//     console.log('me got B grade')
// }
// else if (me >= 50){
//     console.log('me got C grade')
// }
// else if (me >= 40){
//     console.log('me got D grade')
// }
// else if (me <= 39){
//     console.log('me got F grade')
// }
// // or
// else {
//     console.log('me got F grade')
// }

// // Tom part
// if (tom >= 80){
//     console.log('tom got A grade')

// }
// else if (tom >= 60){
//     console.log('tom got B grade')
// }
// else if (tom >= 50){
//     console.log('tom got C grade')
// }
// else if (tom >= 40){
//     console.log('tom got D grade')
// }
// else if (tom <= 39){
//     console.log('tom got F grade')
// }

// // Jane part
// if (jane >= 80){
//     console.log('jane got A grade')

// }
// else if (jane >= 60){
//     console.log('jane got B grade')
// }
// else if (jane >= 50){
//     console.log('jane got C grade')
// }
// else if (jane >= 40){
//     console.log('jane got D grade')
// }
// else if (jane <= 39){
//     console.log('jane got F grade')
// }

// // Peter part
// if (peter >= 80){
//     console.log('peter got A grade')

// }
// else if (peter >= 60){
//     console.log('peter got B grade')
// }
// else if (peter >= 50){
//     console.log('peter got C grade')
// }
// else if (peter >= 40){
//     console.log('peter got D grade')
// }
// else if (peter <= 39){
//     console.log('peter got F grade')
// }

// // john part
// if (john >= 80){
//     console.log('john got A grade')

// }
// else if (john >= 60){
//     console.log('john got B grade')
// }
// else if (john >= 50){
//     console.log('john got C grade')
// }
// else if (john >= 40){
//     console.log('john got D grade')
// }
// else if (john <= 39){
//     console.log('john got F grade')
// }



// Another way

let myScore = 85;
let tomScore = 66;
let janeScore = 95;
let peterScore = 56;
let johnScore = 40;

// Grading function
function getGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "F";
  }
}

// Assign grades to each person
let myGrade = getGrade(myScore);
let tomGrade = getGrade(tomScore);
let janeGrade = getGrade(janeScore);
let peterGrade = getGrade(peterScore);
let johnGrade = getGrade(johnScore);

// Print the results
// console.log("Your grade is " + myGrade);
// console.log("Tom's grade is " + tomGrade);
// console.log("Jane's grade is " + janeGrade);
// console.log("Peter's grade is " + peterGrade);
// console.log("John's grade is " + johnGrade);




// Another way 02

// Define an object to store each person's name and score
const people = [
    { name: 'You', score: 85 },
    { name: 'Tom', score: 66 },
    { name: 'Jane', score: 95 },
    { name: 'Peter', score: 56 },
    { name: 'John', score: 40 }
  ];
  
  // Loop through the array of people and print out their grades
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    let grade;
  
    if (person.score >= 80) {
      grade = 'A';
    } else if (person.score >= 60) {
      grade = 'B';
    } else if (person.score >= 50) {
      grade = 'C';
    } else if (person.score >= 40) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    // console.log(person.name + "'s grade is " + grade);
  }


//   Another way 03
const scores = {
    "You": 85,
    "Tom": 66,
    "Jane": 95,
    "Peter": 56,
    "John": 40
  };
  
  for (const [name, score] of Object.entries(scores)) {
    let grade = "";
    if (score >= 80) {
      grade = "A";
    } else if (score >= 60) {
      grade = "B";
    } else if (score >= 50) {
      grade = "C";
    } else if (score >= 40) {
      grade = "D";
    } else {
      grade = "F";
    }
    console.log(`${name} got a grade of ${grade}`);
  }