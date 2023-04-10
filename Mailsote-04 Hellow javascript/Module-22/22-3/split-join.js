const heading = 'Verify your JavaScript Skills. Accelerate your Job Search.';

// Split part
const parts = heading.split(' ');
const sentences = heading.split('.');
const chars = heading.split('')

// console.log(parts);
// console.log(sentences);
// console.log(chars)


// Slice part
const partial = heading.slice(6, 15);

console.log(partial);


// SubString like slice part
const partial2 = heading.substring(6, 15);

console.log(partial2);



// join part
const line = [
    'Verify your JavaScript Skills.',
    ' Accelerate your Job Search.'
];
const newline = line.join(':');
console.log(newline);