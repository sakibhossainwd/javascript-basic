const heading = 'Verify your JavaScript Skills. Accelerate your Job Search.';

const searchString = 'Skills';
// const doesExist = heading.includes('Skills');
// const doesExist = heading.includes('skills');
// const doesExist = heading.includes(searchString);

const headingLowerCase = heading.toLowerCase();
// const doesExist = headingLowerCase.includes(searchString);
const searchStringLowerCase = searchString.toLowerCase();
const doesExist = headingLowerCase.includes(searchStringLowerCase);

const doesExistOneLine = heading.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);


// ------------------------------
// indexOf

console.log(heading.indexOf('Skills'));
console.log(heading.indexOf('skills'))

if(heading.indexOf('Skills') !== -1){
    console.log('exists inside the string');
}
else{
    console.log('cannot find it');
}


// -----------------------------
// startwith
console.log(heading.startsWith('Verify'));
console.log(heading.startsWith('your'));

// --------------------------
// endwith

console.log(heading.endsWith('Search.'));
console.log(heading.endsWith('Job'));